import {
	barchart,
	company,
	finance,
	financeIndex,
	period,
} from "../../../datatype";

export default interface DataService {
	generateDashboard: (
		finances: finance[][],
		colors: string[],
		index: financeIndex
	) => barchart;
	getCompaniesFinances: (
		companies: company[],
		period: period
	) => Promise<finance[][]>;
}
