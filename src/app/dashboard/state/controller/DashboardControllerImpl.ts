import { makeAutoObservable } from "mobx";
import { barchart, company, financeIndex, period } from "../../datatype";
import CompanyService from "../service/company/CompanyService";
import DataService from "../service/data/DataService";
import IndexService from "../service/index/IndexService";
import PeriodService from "../service/period/PeriodService";
import DashboardController from "./DashboardController";

class DashboardControllerImpl implements DashboardController {
	private cs: CompanyService;
	private is: IndexService;
	private ps: PeriodService;
	private ds: DataService;
	dashboard: barchart | null = null;
	loading: boolean = false;
	constructor(
		cs: CompanyService,
		is: IndexService,
		ps: PeriodService,
		ds: DataService
	) {
		this.cs = cs;
		this.is = is;
		this.ps = ps;
		this.ds = ds;
		makeAutoObservable(this);
		return new Proxy(this, {
			get(target, prop) {
				if (
					prop === "addCompany" ||
					prop === "removeCompany" ||
					prop === "selectPeriod" ||
					prop === "selectIndex"
				) {
					return async function (...args: any[]) {
						target.loading = true;
						const priorIndex = target.selectedIndex();
						const priorPeriod = target.selectedPeriod();
						try {
							target[prop](args[0]);
							target.dashboard = await target.ds.generateDashboard(
								target.selectedCompanies(),
								target.selectedIndex(),
								target.selectedPeriod()
							);
						} catch (e) {
							if (prop === "addCompany") {
								target.removeCompany(args[0]);
							}
							if (prop === "selectPeriod") {
								target.selectPeriod(priorPeriod);
							}
							if (prop === "selectIndex") {
								target.selectIndex(priorIndex);
							}
							if (prop === "removeCompany") {
								target.addCompany(args[0]);
							}
							throw e;
						} finally {
							target.loading = false;
						}
					};
				}
				return target[
					prop as
						| "selectedCompanies"
						| "selectedIndex"
						| "availableIndexs"
						| "selectedPeriod"
						| "avaiablePeriod"
						| "getIndexFormatter"
						| "getIndexFormatUnit"
				];
			},
		});
	}

	selectedCompanies() {
		return this.cs.selectedCompany();
	}
	selectedIndex() {
		return this.is.selectedIndex();
	}
	availableIndexs() {
		return this.is.availableIndex();
	}

	selectedPeriod() {
		return this.ps.selectedPeriod();
	}
	avaiablePeriod() {
		return this.ps.availablePeriod();
	}

	addCompany(company: company) {
		this.cs.addCompany(company);
	}
	removeCompany(company: company) {
		this.cs.removeCompany(company);
	}
	selectPeriod(period: period) {
		this.ps.updatePeriod(period);
	}
	selectIndex(index: financeIndex) {
		this.is.selectIndex(index);
	}

	changeCompanyColor(company: company, color: string) {
		if (this.dashboard) {
			this.ds.changeCompanyColor(this.dashboard, company, color);
		}
	}

	getIndexFormatter() {
		return this.is.selectedIndexFormatter();
	}
	getIndexFormatUnit() {
		return this.is.selectedIndexUnit();
	}
}

export default DashboardControllerImpl;
