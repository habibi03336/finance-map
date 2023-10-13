import { finance } from "@/app/common/datatype";
import { company, period } from "../../datatype";

export default interface CompanyFinanceRepository {
	getCompanyFinances: (company: company, period: period) => Promise<finance[]>;
}
