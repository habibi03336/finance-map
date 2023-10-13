import {
	company,
	financeIndex,
	marketIndex,
	financeMarketIndex,
} from "../common/datatype";

export type { company, period, unit, market } from "../common/datatype";

export type index = financeIndex | marketIndex | financeMarketIndex;

export type indexRow = {
	title: index;
	data: cellData[];
};

export type rootData = {
	companyCode: string;
	averageEquity: number | null;
	netProfit: number | null;
	stockPrice: number | null;
	stockAmount: number | null;
	marketCap: number | null;
	sales: number | null;
	operatingProfit: number | null;
};

export type cellData = { color: string; data: string };

export type fsHeatmapData = {
	companies: company[];
	rows: indexRow[];
};
