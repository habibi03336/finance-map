import { financeIndex, finance } from "../../../datatype";

const calculateFinance = (
	index: financeIndex,
	finance: finance
): number | null => {
	if (index === "ROE")
		return finance.netProfit && finance.equity
			? finance.netProfit / finance.equity
			: null;
	if (index === "매출") return finance.sales;
	if (index === "순이익") return finance.netProfit;
	if (index === "영업이익") return finance.operatingProfit;
	if (index === "영업이익률")
		return finance.operatingProfit && finance.sales
			? finance.operatingProfit / finance.sales
			: null;
	if (index === "자본") return finance.equity;
	throw Error("존재하지 않는 지표입니다.");
};

export default calculateFinance;
