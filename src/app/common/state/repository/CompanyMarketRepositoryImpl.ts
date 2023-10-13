import { GET_COMPANY_STOCK } from "@/api/company";
import { CompanyMarketRepository } from "./CompanyMarketRepository";

class CompanyMarketRepositoryImpl implements CompanyMarketRepository {
	async getCompanyMarketData(stockCode: string) {
		const res = await GET_COMPANY_STOCK(stockCode);
		return res.data;
	}
}

export default CompanyMarketRepositoryImpl;
