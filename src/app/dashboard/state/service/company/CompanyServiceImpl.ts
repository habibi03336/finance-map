import { company } from "@/app/common/datatype";
import CompanyService from "./CompanyService";

class CompanyServiceImpl implements CompanyService {
	private companies: company[] = [];

	selectedCompany() {
		return [...this.companies];
	}

	addCompany(company: company) {
		if (
			this.companies.some((elem) => elem.companyCode === company.companyCode)
		) {
			return;
		} else {
			this.companies.push(company);
		}
	}
	removeCompany(company: company) {
		this.companies = this.companies.filter(
			(elem) => elem.companyCode !== company.companyCode
		);
	}
}

export default CompanyServiceImpl;
