import { company } from "../../datatype";

export interface CompanyRepository {
	searchCompanyByName: (token: string) => Promise<company[]>;
}
