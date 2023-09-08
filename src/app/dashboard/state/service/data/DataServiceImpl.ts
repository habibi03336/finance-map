import {
	barchart,
	company,
	financeIndex,
	period,
} from "@/app/dashboard/datatype";
import DataService from "./DataService";
import CompanyFinanceRepository from "../../repository/CompanyFinanceRepository";
import calculateFinance from "./calculateFinance";

const colors = ["#FF6347", "#77DD77", "#789FCC"];
const companyColorMap = new Map<string, string>();

class DataServiceImpl implements DataService {
	private companyFinanceRepository: CompanyFinanceRepository;

	constructor(cfr: CompanyFinanceRepository) {
		this.companyFinanceRepository = cfr;
	}

	async generateDashboard(
		companies: company[],
		index: financeIndex,
		period: period
	) {
		const dashboard: barchart = {
			index: index,
			groups: [],
		};
		let i = 0;
		for (let company of companies) {
			const finance = await this.companyFinanceRepository.getCompanyFinance(
				company,
				period
			);
			dashboard.groups.push({
				company: company,
				data: finance.map((elem) => {
					return {
						xTitle: elem.quarter,
						yData: calculateFinance(index, elem),
					};
				}),
				color: companyColorMap.get(company.companyCode) || colors[i % 3],
			});
			i += 1;
		}
		return dashboard;
	}

	changeCompanyColor(barchart: barchart, company: company, color: string) {
		companyColorMap.set(company.companyCode, color);
		for (let group of barchart.groups) {
			if (group.company.companyCode === company.companyCode) {
				group.color = color;
			}
		}
	}
}

export default DataServiceImpl;
