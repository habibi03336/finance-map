import { period, rootData } from "../../datatype";

export interface CompanyRootRepository {
	getCompanyRootFi: (
		companyCode: string,
		stockCode: string,
		period: period
	) => Promise<rootData>;
}
