import { market } from "../../datatype";

export interface CompanyMarketRepository {
	getCompanyMarketData: (stockCode: string) => Promise<market>;
}
