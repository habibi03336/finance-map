import { index } from "@/app/heatmap/datatype";
import toUnit from "@/lib/numToUnit";

const indexUnit = new Map<index, (n: number) => string>([
	["주가", toUnit.won],
	["상장주식수", toUnit.tenThousandTicket],
	["순이익", (n) => toUnit.speakingNum(n) + "(원)"],
	["자본", (n) => toUnit.speakingNum(n) + "(원)"],
	["매출", (n) => toUnit.speakingNum(n) + "(원)"],
	["시가총액", (n) => toUnit.speakingNum(n) + "(원)"],
	["영업이익", (n) => toUnit.speakingNum(n) + "(원)"],
	["영업이익률", toUnit.percentByFirstDecimal],
	["PER", toUnit.percentByFirstDecimal],
	["ROE", toUnit.percentByFirstDecimal],
	["PBR", toUnit.mutiplier],
	["EPS", toUnit.won],
	["BPS", toUnit.won],
]);

export default indexUnit;
