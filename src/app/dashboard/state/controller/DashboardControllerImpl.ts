import { makeAutoObservable } from "mobx";
import { barchart, color, company, financeIndex, period } from "../../datatype";
import DataService from "../service/data/DataService";
import IndexService from "../service/index/IndexService";
import DashboardController from "./DashboardController";
import CompaniesFinancesByPeriodAndMarket from "@/app/common/state/controller/CompaniesFinancesByPeriodAndMarket";

class DashboardControllerImpl implements DashboardController {
	public index: financeIndex = "영업이익";
	private dataService: DataService;
	private indexService: IndexService;
	private companyColors: string[] = ["#FF6347", "#77DD77", "#789FCC"];
	private companiesFinancesByPeriod: CompaniesFinancesByPeriodAndMarket;

	constructor(
		companiesFinancesByPeriod: CompaniesFinancesByPeriodAndMarket,
		ds: DataService,
		is: IndexService
	) {
		this.companiesFinancesByPeriod = companiesFinancesByPeriod;
		this.indexService = is;
		this.dataService = ds;
		makeAutoObservable(this);
	}

	get dashboard(): barchart {
		return this.dataService.generateDashboard(
			this.companiesFinancesByPeriod.finances,
			this.companyColors,
			this.index
		);
	}

	get indexFormatter() {
		return this.indexService.getFormatter(this.index);
	}

	get indexUnit() {
		return this.indexService.getUnit(this.index);
	}

	get finances() {
		return this.companiesFinancesByPeriod.finances;
	}

	get loading() {
		return this.companiesFinancesByPeriod.loading;
	}

	get companies() {
		return this.companiesFinancesByPeriod.companies;
	}

	get period() {
		return this.companiesFinancesByPeriod.period;
	}

	async addCompany(company: company) {
		await this.companiesFinancesByPeriod.addCompany(company);
	}

	removeCompany(company: company) {
		this.companiesFinancesByPeriod.removeCompany(company);
	}

	async selectPeriod(period: period) {
		await this.companiesFinancesByPeriod.updatePeriod(period);
	}

	selectIndex(index: financeIndex) {
		this.index = index;
	}

	changeCompanyColor(company: company, color: string) {
		const findCompany = this.companies.find(
			(elem) => elem.companyCode === company.companyCode
		);
		// if (findCompany) findCompany.color = color;
	}
}

export default DashboardControllerImpl;
