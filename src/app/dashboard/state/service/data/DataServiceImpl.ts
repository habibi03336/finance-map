import { barchart, finance, financeIndex } from "@/app/dashboard/datatype";
import DataService from "./DataService";
import calculatorByIndex from "./calculatorByIndex";
class DataServiceImpl implements DataService {
	generateDashboard(
		finances: finance[][],
		colors: string[],
		index: financeIndex
	) {
		const dashboard: barchart = {
			index: index,
			groups: [],
		};
		for (let i = 0; i < finances.length; i += 1) {
			const calculator = calculatorByIndex(index);
			const finance = finances[i];
			const company = finance[0].company;
			dashboard.groups.push({
				company: company,
				data: finance.map((elem) => {
					return {
						xTitle: elem.quarter,
						yData: calculator(elem),
					};
				}),
				color: colors[i],
			});
		}
		return dashboard;
	}
}

export default DataServiceImpl;
