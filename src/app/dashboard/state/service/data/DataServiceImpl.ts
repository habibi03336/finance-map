import {
	barchart,
	company,
	finance,
	financeIndex,
	period,
} from "@/app/dashboard/datatype";
import DataService from "./DataService";
import CompanyFinanceRepository from "../../repository/CompanyFinanceRepository";
import calculateFinance from "./calculateFinance";

class DataServiceImpl implements DataService {
	private companyFinanceRepository: CompanyFinanceRepository;

	constructor(cfr: CompanyFinanceRepository) {
		this.companyFinanceRepository = cfr;
	}

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
			const finance = finances[i];
			const company = finance[0].company;
			dashboard.groups.push({
				company: company,
				data: finance.map((elem) => {
					return {
						xTitle: elem.quarter,
						yData: calculateFinance(index, elem),
					};
				}),
				color: colors[i],
			});
			i += 1;
		}
		return dashboard;
	}

	async getCompaniesFinances(
		companies: company[],
		period: period
	): Promise<finance[][]> {
		const finances = [];
		for (let company of companies) {
			const finance = await this.companyFinanceRepository.getCompanyFinance(
				company,
				period
			);
			finances.push(finance);
		}
		return finances;
	}
}

export default DataServiceImpl;
