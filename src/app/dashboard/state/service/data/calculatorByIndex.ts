import { financeIndex, finance } from "../../../datatype";

const calculatorByIndex = (index: financeIndex): Function => {
	if (index === "ROE")
		return (finance: finance) => {
			return finance.netProfit && finance.equity
				? finance.netProfit / finance.equity
				: null;
		};
	if (index === "매출") return (finance: finance) => finance.sales;
	if (index === "매출성장률")
		return (() => {
			let prevFinance: finance | null = null;
			return (finance: finance) => {
				if (
					prevFinance === null ||
					finance.sales === null ||
					prevFinance.sales === null
				) {
					prevFinance = finance;
					return null;
				} else {
					const res = (finance.sales - prevFinance.sales) / prevFinance.sales;
					prevFinance = finance;
					return res;
				}
			};
		})();
	if (index === "순이익") return (finance: finance) => finance.netProfit;
	if (index === "영업이익")
		return (finance: finance) => finance.operatingProfit;
	if (index === "영업이익률")
		return (finance: finance) => {
			return finance.operatingProfit && finance.sales
				? finance.operatingProfit / finance.sales
				: null;
		};
	if (index === "자본") return (finance: finance) => finance.equity;
	if (index === "현금성자산")
		return (finance: finance) => finance.cashEquivalents;
	if (index === "부채") return (finance: finance) => finance.debt;
	throw Error("존재하지 않는 지표입니다.");
};

export default calculatorByIndex;
