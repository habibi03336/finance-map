import CompanySearchImpl from "./controller/CompanySearchImpl";
import CompanySearcherImpl from "./service/CompanySearcherImpl";
import CompanyRepositoryImpl from "./repository/CompanyRepositoryImpl";

export const companySearch = new CompanySearchImpl(
	new CompanySearcherImpl(new CompanyRepositoryImpl())
);
