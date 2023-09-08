import { RawQuarter } from "./dto/RawQuarter";

export type period = { start: RawQuarter; end: RawQuarter };

export type company = { companyCode: string; name: string; stockCode: string };

export type unit = "%" | "원" | "백만원" | "억원" | "천주";

export type financeIndex =
	| "자본"
	| "순이익"
	| "영업이익"
	| "영업이익률"
	| "매출"
	| "ROE";

export type marketIndex = "주가" | "상장주식수" | "시가총액";

export type financeMarketIndex = "PBR" | "PER" | "EPS" | "BPS";
