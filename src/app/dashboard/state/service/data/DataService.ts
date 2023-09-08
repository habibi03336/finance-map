import barChart from "@/app/dashboard/ui/presentation/barChart";
import { barchart, company, financeIndex, period } from "../../../datatype";

export default interface DataService {
	generateDashboard: (
		companies: company[],
		index: financeIndex,
		period: period
	) => Promise<barchart>;

	changeCompanyColor: (
		dashboard: barchart,
		company: company,
		color: string
	) => void;
}
