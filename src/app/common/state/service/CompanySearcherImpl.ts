import { CompanyRepository } from "../repository/CompanyRepository";
import { CompanySearcher } from "./CompanySearcher";

class CompanySearcherImpl implements CompanySearcher {
	private companyRepo: CompanyRepository;

	constructor(cr: CompanyRepository) {
		this.companyRepo = cr;
	}

	async search(search: string) {
		if (search === "") return [];
		return this.companyRepo.searchCompanyByName(search);
	}
}

export default CompanySearcherImpl;
