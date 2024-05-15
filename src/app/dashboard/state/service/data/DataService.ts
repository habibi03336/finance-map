import {
	barchart,
	finance,
	financeIndex,
	yearlyQuarterly,
} from "../../../datatype";

export default interface DataService {
	generateDashboard: (
		finances: finance[][],
		colors: string[],
		index: financeIndex,
		yearlyQuarterly: yearlyQuarterly
	) => barchart;
}
