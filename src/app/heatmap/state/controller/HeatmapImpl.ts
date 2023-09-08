import { makeAutoObservable } from "mobx";
import AggregatorService from "../service/Aggregator/AggregatorService";
import CompanyManagerService from "../service/CompanyManager/CompanyManagerService";
import IndexManagerService from "../service/IndexManager/IndexManagerService";
import PeriodManagerService from "../service/PeriodManager/PeriodManagerService";
import { company, period, fsHeatmapData, index } from "../../datatype";
import { Heatmap } from "./Heatmap";

class HeatmapImpl implements Heatmap {
	FSdata: fsHeatmapData | null = null;
	loading: boolean = false;

	#peroidManager: PeriodManagerService;
	#indexManager: IndexManagerService;
	#companyManager: CompanyManagerService;
	#aggregator: AggregatorService;

	constructor(
		periodM: PeriodManagerService,
		indexM: IndexManagerService,
		companyM: CompanyManagerService,
		aggregator: AggregatorService
	) {
		this.#peroidManager = periodM;
		this.#indexManager = indexM;
		this.#companyManager = companyM;
		this.#aggregator = aggregator;
		this.updateCompareData();
		makeAutoObservable(this);
	}

	selectedCompanies() {
		return this.#companyManager.companies.map((elem) => elem.tag);
	}

	selectedPeriod() {
		return this.#peroidManager.period;
	}

	selectedIndexs() {
		return this.#indexManager.selectedIndexs;
	}

	allIndexs() {
		return this.#indexManager.allIndexs;
	}

	availablePeriod() {
		return this.#peroidManager.availablePeriod;
	}

	async addCompany(company: company) {
		this.updateStart();
		try {
			await this.#companyManager.add(company, this.#peroidManager.period);
		} catch (e) {
			throw e;
		} finally {
			this.updateDone();
		}
	}

	removeCompany(company: company) {
		this.updateStart();
		this.#companyManager.delete(company);
		this.updateDone();
	}

	addIndex(index: index) {
		this.updateStart();
		this.#indexManager.add(index);
		this.updateDone();
	}

	removeIndex(index: index) {
		this.updateStart();
		this.#indexManager.delete(index);
		this.updateDone();
	}

	async updatePeriod(period: period) {
		this.updateStart();
		try {
			await this.#companyManager.updatePeriod(period);
			this.#peroidManager.update(period);
		} catch (e) {
			await this.#companyManager.updatePeriod(this.#peroidManager.period);
			throw e;
		} finally {
			this.updateDone();
		}
	}

	private updateCompareData() {
		this.FSdata = this.#aggregator.getFSData(
			this.#indexManager.selectedIndexs,
			this.#companyManager.getCompaniesRoot()
		);
	}

	private updateStart() {
		this.loading = true;
	}

	private updateDone() {
		this.updateCompareData();
		this.loading = false;
	}
}

export default HeatmapImpl;
