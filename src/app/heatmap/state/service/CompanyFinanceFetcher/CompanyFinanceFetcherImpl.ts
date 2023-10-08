import { CompanyRootRepository } from "@/app/heatmap/state/repository/CompanyRepository";
import CompanyFinanceFetcher from "./CompanyFinanceFetcher";
import { company, period, companyFinance } from "@/app/heatmap/datatype";

class CompanyFinanceFetcherImpl implements CompanyFinanceFetcher {
	private companyRepo: CompanyRootRepository;

	constructor(cr: CompanyRootRepository) {
		this.companyRepo = cr;
	}

	async getCompaniesFinance(
		companies: company[],
		period: period
	): Promise<companyFinance[]> {
		const companiesFinance = await Promise.all(
			companies.map((company) =>
				this.companyRepo.getCompanyRootFi(
					company.companyCode,
					company.stockCode,
					period
				)
			)
		);
		return companiesFinance.map((companyFinance, idx): companyFinance => {
			return { tag: companies[idx], rootData: companyFinance };
		});
	}
}

export default CompanyFinanceFetcherImpl;
