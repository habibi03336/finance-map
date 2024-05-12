export type period = { start: quarter; end: quarter };

export type company = { companyCode: string; name: string; stockCode: string };

export type quarter = { year: number; quarter: 1 | 2 | 3 | 4 };

export type finance = {
	company: company;
	quarter: quarter;
	currency: string | null;
	reportCode: string | null;
	reportType: string | null;
	sales: number | null;
	equity: number | null;
	debt: number | null;
	operatingProfit: number | null;
	netProfit: number | null;
	cashEquivalents: number | null;
};

export enum FinancialIndex {
	SALES = "sales",
	EQUITY = "equity",
	DEBT = "debt",
	OPERATING_PROFIT = "operatingProfit",
	NET_PROFIT = "netProfit",
	CASH_EQUIVALENTS = "cashEquivalents",
}

export type unit = "%" | "원" | "백만원" | "억원" | "천주";

export type financeIndex =
	| "자본"
	| "부채"
	| "순이익"
	| "영업이익"
	| "영업이익률"
	| "매출"
	| "현금성자산"
	| "ROE";

export type marketIndex = "주가" | "상장주식수" | "시가총액";

export type financeMarketIndex = "PBR" | "PER" | "EPS" | "BPS";

export type market = {
	stockCode: string;
	stockPrice: number | null;
	stockAmount: number | null;
	marketCap: number | null;
};

export type errorBody = {
	errorCode: string;
	message: string;
};
