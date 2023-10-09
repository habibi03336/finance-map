import { company, financeIndex } from "../common/datatype";
import { RawQuarter } from "../common/dto/RawQuarter";
export type { company, period, financeIndex } from "../common/datatype";

export type finance = {
	company: company;
	quarter: RawQuarter;
	sales: number | null;
	equity: number | null;
	debt: number | null;
	operatingProfit: number | null;
	netProfit: number | null;
	cashEquivalents: number | null;
};

export type companyFinance = {
	company: company;
	finance: finance[];
};

export type bar = {
	xTitle: RawQuarter;
	yData: number | null;
};

export type group = {
	company: company;
	data: bar[];
	color: string;
};

export type barchart = {
	index: financeIndex;
	groups: group[];
};

export type color = {
	color: string;
};
