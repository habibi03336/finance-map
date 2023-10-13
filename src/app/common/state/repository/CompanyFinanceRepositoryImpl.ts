import Quarter from "@/app/common/util/Quarter";
import { company, period } from "../../datatype";
import CompanyFinanceRepository from "./CompanyFinanceRepository";
import { GET_COMPANY_FINANCE } from "@/api/company";

class CompanyFinanceRepositoryImpl implements CompanyFinanceRepository {
	async getCompanyFinances(company: company, period: period) {
		const quarters = Quarter.getAllQuartersBetween(period.start, period.end);
		const _finances = await Promise.all(
			quarters.map((q) =>
				GET_COMPANY_FINANCE(company.companyCode, {
					year: q.year,
					quarter: q.quarter,
				})
			)
		);
		return _finances.map((elem, index) => {
			return { ...elem.data, quarter: quarters[index] };
		});
	}
}

export default CompanyFinanceRepositoryImpl;
