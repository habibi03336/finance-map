import { company } from "../../datatype";

export interface CompanySearcher {
	search: (search: string) => Promise<company[]>;
}
