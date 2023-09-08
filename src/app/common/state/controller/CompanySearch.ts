import { company } from "../../datatype";

export interface CompanySearch {
	companiesSearched: company[] | null;
	getCompaniesWithNameContains: (token: string) => void;
}
