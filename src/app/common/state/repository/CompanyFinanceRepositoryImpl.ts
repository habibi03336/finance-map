import Quarter from "@/app/common/util/Quarter";
import { company, period, errorBody } from "@/app/common/datatype";
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
			if (elem.status === 200) {
				return { ...elem.data, quarter: quarters[index] };
			} else {
				const error = elem.data as unknown as errorBody;
				if (error.errorCode === "dne01") {
					return {
						company: company,
						reportCode: null,
						reportType: null,
						currency: null,
						sales: null,
						equity: null,
						debt: null,
						operatingProfit: null,
						netProfit: null,
						cashEquivalents: null,
						quarter: quarters[index],
					};
				}
				throw Error(error.message);
			}
		});
	}
}

export default CompanyFinanceRepositoryImpl;
