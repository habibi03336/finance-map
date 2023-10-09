import { financeIndex, company, period, barchart } from "../../datatype";

export default interface DashboardController {
	dashboard: barchart | null;
	loading: boolean;
	companies: company[];
	index: financeIndex;
	indexUnit: string;
	period: period;
	indexFormatter: (num: number) => string;
	addCompany: (company: company) => void;
	removeCompany: (company: company) => void;
	selectPeriod: (period: period) => void;
	selectIndex: (index: financeIndex) => void;
	changeCompanyColor: (company: company, color: string) => void;
}
