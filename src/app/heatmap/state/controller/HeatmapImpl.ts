import { makeAutoObservable } from "mobx";
import HeatmapDataService from "../service/HeatmapDataService/HeatmapDataService";
import { company, period, fsHeatmapData, index, market } from "../../datatype";
import { Heatmap } from "./Heatmap";
import { defaultIndexes } from "../constant";
import CompaniesFinancesByPeriodAndMarket from "@/app/common/state/controller/CompaniesFinancesByPeriodAndMarket";

class HeatmapImpl implements Heatmap {
	public indexes: index[] = defaultIndexes;

	private heatmapDataService: HeatmapDataService;
	private companiesFinancesByPeriodAndMarket: CompaniesFinancesByPeriodAndMarket;

	constructor(
		companiesFinancesByPeriod: CompaniesFinancesByPeriodAndMarket,
		heatmapDataService: HeatmapDataService
	) {
		this.companiesFinancesByPeriodAndMarket = companiesFinancesByPeriod;
		this.heatmapDataService = heatmapDataService;
		makeAutoObservable(this);
	}

	get FSdata(): fsHeatmapData {
		const heatmapData = this.heatmapDataService.generate(
			this.indexes,
			this.companiesFinancesByPeriodAndMarket.finances,
			this.companiesFinancesByPeriodAndMarket.markets
		);
		return heatmapData;
	}

	get loading() {
		return this.companiesFinancesByPeriodAndMarket.loading;
	}

	get companies() {
		return this.companiesFinancesByPeriodAndMarket.companies;
	}

	get period() {
		return this.companiesFinancesByPeriodAndMarket.period;
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
		await this.companiesFinancesByPeriodAndMarket.addCompany(company);
	}

	removeCompany(company: company) {
		this.companiesFinancesByPeriodAndMarket.removeCompany(company);
	}

	async updatePeriod(period: period) {
		await this.companiesFinancesByPeriodAndMarket.updatePeriod(period);
	}
}

export default HeatmapImpl;
