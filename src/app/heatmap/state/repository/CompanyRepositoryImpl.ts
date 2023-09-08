import { GET_COMPANY_FINANCE, GET_COMPANY_STOCK } from "@/api/company";
import { period, rootData } from "@/app/heatmap/datatype";
import { CompanyRootRepository } from "./CompanyRepository";
import { RawQuarter } from "@/app/common/dto/RawQuarter";

const everyObjectsProperyNotNull = (objectsArr: any[], property: string) => {
	return objectsArr.every((elem) => elem[property] !== null);
};

class CompanyRootRepositoryImpl implements CompanyRootRepository {
	async getCompanyRootFi(
		companyCode: string,
		stockCode: string,
		period: period
	) {
		const yearQuarters = RawQuarter.getAllQuartersBetween(
			period.start,
			period.end
		);
		const [{ data: stock }, ..._finances] = await Promise.all([
			GET_COMPANY_STOCK(stockCode),
			...yearQuarters.map((yq) => GET_COMPANY_FINANCE(companyCode, yq)),
		]);
		const finances = _finances.map((_finance) => _finance.data);
		const rootData: rootData = {
			companyCode: companyCode,
			averageEquity: everyObjectsProperyNotNull(finances, "equity")
				? finances.reduce((pre, finance) => {
						return pre + finance.equity!;
				  }, 0) / finances.length
				: null,
			netProfit: everyObjectsProperyNotNull(finances, "netProfit")
				? finances.reduce((pre, finance) => {
						return pre + finance.netProfit!;
				  }, 0)
				: null,
			sales: everyObjectsProperyNotNull(finances, "sales")
				? finances.reduce((pre, finance) => {
						return pre + finance.sales!;
				  }, 0)
				: null,
			operatingProfit: everyObjectsProperyNotNull(finances, "operatingProfit")
				? finances.reduce((pre, finance) => {
						return pre + finance.operatingProfit!;
				  }, 0)
				: null,
			stockPrice: null,
			stockAmount: null,
			marketCap: null,
		};

		return { ...rootData, ...stock };
	}
}

export default CompanyRootRepositoryImpl;
