import { company, financeIndex, quarter } from "../common/datatype";
export type {
	company,
	period,
	financeIndex,
	finance,
} from "../common/datatype";

export type bar = {
	xTitle: quarter;
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

export type yearlyQuarterly = "year" | "quarter";
