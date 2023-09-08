import { GET_COMPANY_SEARCH_BY_NAME } from "../../../../api/company";
import { CompanyRepository } from "./CompanyRepository";

class CompanyRepositoryImpl implements CompanyRepository {
	async searchCompanyByName(token: string) {
		const res = await GET_COMPANY_SEARCH_BY_NAME(token);
		return res.data;
	}
}

export default CompanyRepositoryImpl;
