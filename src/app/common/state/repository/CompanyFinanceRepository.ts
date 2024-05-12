import { company, period, finance } from "@/app/common/datatype";

export default interface CompanyFinanceRepository {
	getCompanyFinances: (company: company, period: period) => Promise<finance[]>;
}
