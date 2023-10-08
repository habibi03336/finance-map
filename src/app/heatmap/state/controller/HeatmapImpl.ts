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
		this.companiesFinance =
			await this.#companyFinanceFetcher.getCompaniesFinance(
				this.companies,
				this.period
			);
		this.loading = false;
	}

	addIndex(index: index) {
		if (this.indexes.includes(index)) return;
		this.indexes.push(index);
	}

	removeIndex(index: index) {
		if (!this.indexes.includes(index)) return;
		this.indexes = this.indexes.filter((elem) => elem != index);
	}

	addCompany(company: company) {
		if (this.companies.includes(company)) return;
		this.companies.push(company);
		this.updateCompaniesFinance();
	}

	removeCompany(company: company) {
		if (!this.companies.includes(company)) return;
		this.companies = this.companies.filter((elem) => elem != company);
		this.updateCompaniesFinance();
	}

	updatePeriod(period: period) {
		this.period = period;
	}
}

export default HeatmapImpl;
