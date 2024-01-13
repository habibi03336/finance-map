import { GET_COMPANY_STOCK } from "@/api/company";
import { CompanyMarketRepository } from "./CompanyMarketRepository";

class CompanyMarketRepositoryImpl implements CompanyMarketRepository {
	async getCompanyMarketData(stockCode: string) {
		const res = await GET_COMPANY_STOCK(stockCode);
		return res.status == 200
			? res.data
			: {
					stockCode: stockCode,
					stockPrice: null,
					stockAmount: null,
					marketCap: null,
			  };
	}
}

export default CompanyMarketRepositoryImpl;
