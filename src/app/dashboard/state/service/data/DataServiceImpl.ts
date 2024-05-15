import {
	barchart,
	finance,
	financeIndex,
	yearlyQuarterly,
} from "@/app/dashboard/datatype";
import DataService from "./DataService";
import calculatorByIndex from "./calculatorByIndex";
class DataServiceImpl implements DataService {
	generateDashboard(
		finances: finance[][],
		colors: string[],
		index: financeIndex,
		yearlyQuarterly: yearlyQuarterly
	) {
		const dashboard: barchart = {
			index: index,
			groups: [],
		};
		if (yearlyQuarterly === "year") {
			finances = finances.map(this.mergeByYear);
		}
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

	private mergeByYear(finances: finance[]): finance[] {
		const yearFinance: { [key: string]: finance[] } = {};
		for (const f of finances) {
			if (!yearFinance[f.quarter.year]) {
				yearFinance[f.quarter.year] = [f];
			} else {
				yearFinance[f.quarter.year].push(f);
			}
		}
		const financeByYear = [];
		for (const y in yearFinance) {
			const financesInOneYear = yearFinance[y];
			financeByYear.push(
				financesInOneYear.reduce((pre, cur) => {
					return {
						company: cur.company,
						quarter: cur.quarter,
						currency: cur.currency,
						reportCode: cur.reportCode,
						reportType: cur.reportType,
						sales:
							pre.sales === null || cur.sales === null
								? null
								: pre.sales + cur.sales,
						equity: cur.equity,
						debt: cur.debt,
						operatingProfit:
							pre.operatingProfit === null || cur.operatingProfit === null
								? null
								: pre.operatingProfit + cur.operatingProfit,
						netProfit:
							pre.netProfit === null || cur.netProfit === null
								? null
								: pre.netProfit + cur.netProfit,
						cashEquivalents: cur.cashEquivalents,
					};
				})
			);
		}

		return financeByYear;
	}
}

export default DataServiceImpl;
