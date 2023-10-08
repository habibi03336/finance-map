import { companyFinance, company, period } from "@/app/heatmap/datatype";

export default interface CompanyFinanceFetcher {
	getCompaniesFinance: (
		companies: company[],
		period: period
	) => Promise<companyFinance[]>;
}
