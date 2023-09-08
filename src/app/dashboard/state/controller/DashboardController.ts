import { financeIndex, company, period, barchart } from "../../datatype";

export default interface DashboardController {
	dashboard: barchart | null;
	loading: boolean;
	selectedCompanies: () => company[];
	selectedIndex: () => financeIndex;
	getIndexFormatter: () => (num: number) => string;
	getIndexFormatUnit: () => string;
	availableIndexs: () => financeIndex[];
	selectedPeriod: () => period;
	avaiablePeriod: () => period;
	addCompany: (company: company) => void;
	removeCompany: (company: company) => void;
	selectPeriod: (period: period) => void;
	selectIndex: (index: financeIndex) => void;
	changeCompanyColor: (company: company, color: string) => void;
}
