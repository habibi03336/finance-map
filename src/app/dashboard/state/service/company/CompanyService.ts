import { company } from "../../../datatype";

export default interface CompanyService {
	selectedCompany: () => company[];
	addCompany: (company: company) => void;
	removeCompany: (company: company) => void;
}
