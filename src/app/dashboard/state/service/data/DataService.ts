import { barchart, finance, financeIndex } from "../../../datatype";

export default interface DataService {
	generateDashboard: (
		finances: finance[][],
		colors: string[],
		index: financeIndex
	) => barchart;
}
