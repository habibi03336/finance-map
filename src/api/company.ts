import { AxiosRequestHeaders, AxiosResponse } from "axios";
import financeApiClient from "./financeApiClient";
import stockApiClient from "./stockApiClient";

interface companyTag {
	companyCode: string;
	name: string;
	stockCode: string;
}
interface companyFinance {
	company: companyTag;
	year: number;
	quarter: number;
	equity: number | null;
	sales: number | null;
	operatingProfit: number | null;
	netProfit: number | null;
}

export const GET_COMPANY_FINANCE = (
	companyCode: string,
	yearQuarter: { year: number; quarter: number }
) =>
	financeApiClient.get<companyFinance>(
		`/finance?companyCode=${companyCode}&year=${yearQuarter.year}&quarter=${yearQuarter.quarter}&currency=KRW`
	);

interface companyStock {
	stockCode: string;
	stockPrice: number | null;
	stockAmount: number | null;
	marketCap: number | null;
}

export const GET_COMPANY_STOCK = (stockCode: string) =>
	stockApiClient.get<companyStock>(`?stockCode=${stockCode}`);

export const GET_COMPANY_SEARCH_BY_NAME = (token: string) =>
	financeApiClient.get<companyTag[]>(`/company?token=${token}`);
