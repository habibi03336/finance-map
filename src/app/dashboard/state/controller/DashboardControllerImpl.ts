import { makeAutoObservable } from "mobx";
import {
	barchart,
	color,
	company,
	finance,
	financeIndex,
	period,
} from "../../datatype";
import DataService from "../service/data/DataService";
import IndexService from "../service/index/IndexService";
import DashboardController from "./DashboardController";
import { defaultPeriod } from "../../constant/period";

class DashboardControllerImpl implements DashboardController {
	public companies: (company & color)[] = [];
	public index: financeIndex = "영업이익";
	public period: period = defaultPeriod;
	private finances: finance[][] = [];
	private dataService: DataService;
	private indexService: IndexService;
	private companyColors: string[] = ["#FF6347", "#77DD77", "#789FCC"];

	loading: boolean = false;
	constructor(ds: DataService, is: IndexService) {
		this.indexService = is;
		this.dataService = ds;
		makeAutoObservable(this);
	}

	get dashboard(): barchart {
		return this.dataService.generateDashboard(
			this.finances,
			this.companies.map((elem) => elem.color),
			this.index
		);
	}

	get indexFormatter() {
		return this.indexService.getFormatter(this.index);
	}

	get indexUnit() {
		return this.indexService.getUnit(this.index);
	}

	private async updateCompaniesFinances() {
		this.loading = true;
		this.finances = await this.dataService.getCompaniesFinances(
			this.companies,
			this.period
		);
		this.loading = false;
	}

	async addCompany(company: company) {
		if (
			this.companies.some((elem) => elem.companyCode === company.companyCode)
		) {
			return;
		}
		this.companies.push({
			...company,
			color:
				this.companyColors[this.companies.length % this.companyColors.length],
		});
		await this.updateCompaniesFinances();
	}
	removeCompany(company: company) {
		this.companies = this.companies.filter(
			(elem) => elem.companyCode !== company.companyCode
		);
		this.finances = this.finances.filter(
			(elem) => elem[0].company.companyCode !== company.companyCode
		);
	}
	selectPeriod(period: period) {
		this.period = period;
		this.updateCompaniesFinances();
	}
	selectIndex(index: financeIndex) {
		this.index = index;
	}

	changeCompanyColor(company: company, color: string) {
		const findCompany = this.companies.find(
			(elem) => elem.companyCode === company.companyCode
		);
		if (findCompany) findCompany.color = color;
	}
}

export default DashboardControllerImpl;
