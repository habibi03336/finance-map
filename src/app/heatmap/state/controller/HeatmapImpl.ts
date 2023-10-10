import { makeAutoObservable } from "mobx";
import AggregatorService from "../service/Aggregator/AggregatorService";
import {
	company,
	period,
	fsHeatmapData,
	index,
	companyFinance,
} from "../../datatype";
import { Heatmap } from "./Heatmap";
import CompanyFinanceFetcher from "../service/CompanyFinanceFetcher/CompanyFinanceFetcher";
import { defaultPeriod } from "../constant/period";
import { defaultIndexes } from "../constant";

class HeatmapImpl implements Heatmap {
	public loading: boolean = false;
	public period: period = defaultPeriod;
	public indexes: index[] = defaultIndexes;
	private companies: company[] = [];
	private companiesFinance: companyFinance[] = [];

	#aggregator: AggregatorService;
	#companyFinanceFetcher: CompanyFinanceFetcher;

	constructor(
		aggregator: AggregatorService,
		companyFinanceFetcher: CompanyFinanceFetcher
	) {
		this.#aggregator = aggregator;
		this.#companyFinanceFetcher = companyFinanceFetcher;
		makeAutoObservable(this);
	}

	get FSdata(): fsHeatmapData {
		const heatmapData = this.#aggregator.getFSData(
			this.indexes,
			this.companiesFinance
		);
		return heatmapData;
	}

	async updateCompaniesFinance() {
		this.loading = true;
		try {
			this.companiesFinance =
				await this.#companyFinanceFetcher.getCompaniesFinance(
					this.companies,
					this.period
				);
		} finally {
			this.loading = false;
		}
	}

	addIndex(index: index) {
		if (this.indexes.includes(index)) return;
		this.indexes.push(index);
	}

	removeIndex(index: index) {
		if (!this.indexes.includes(index)) return;
		this.indexes = this.indexes.filter((elem) => elem != index);
	}

	async addCompany(company: company) {
		if (this.companies.includes(company)) return;
		this.companies.push(company);
		try {
			await this.updateCompaniesFinance();
		} catch (e) {
			this.companies.pop();
			throw e;
		}
	}

	removeCompany(company: company) {
		if (!this.companies.includes(company)) return;
		this.companies = this.companies.filter((elem) => elem != company);
		this.updateCompaniesFinance();
	}

	async updatePeriod(period: period) {
		const tmp = this.period;
		this.period = period;
		try {
			await this.updateCompaniesFinance();
		} catch (e) {
			this.period = tmp;
			throw e;
		}
	}
}

export default HeatmapImpl;
