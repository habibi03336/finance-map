import { company, finance, period } from "../../datatype";

export default interface CompanyFinanceRepository {
	getCompanyFinance: (company: company, period: period) => Promise<finance[]>;
}
