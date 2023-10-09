import { financeIndex } from "@/app/common/datatype";
import IndexService from "./IndexService";
import numToUnit from "@/lib/numToUnit";

const indexFormatterMap = new Map<financeIndex, (num: number) => string>([
	["ROE", (num: number) => numToUnit.percentByFirstDecimal(num)],
	["영업이익률", (num: number) => numToUnit.percentByFirstDecimal(num)],
	["매출", (num: number) => numToUnit.speakingNum(num)],
	["순이익", (num: number) => numToUnit.speakingNum(num)],
	["영업이익", (num: number) => numToUnit.speakingNum(num)],
	["자본", (num: number) => numToUnit.speakingNum(num)],
	["부채", (num: number) => numToUnit.speakingNum(num)],
	["현금성자산", (num: number) => numToUnit.speakingNum(num)],
]);
const indexUnitMap = new Map<financeIndex, string>([
	["ROE", "(%)"],
	["영업이익률", "(%)"],
	["매출", "(원)"],
	["순이익", "(원)"],
	["영업이익", "(원)"],
	["자본", "(원)"],
	["부채", "(원)"],
	["현금성자산", "(원)"],
]);

class IndexServiceImpl implements IndexService {
	getFormatter(index: financeIndex) {
		return indexFormatterMap.get(index)!;
	}
	getUnit(index: financeIndex) {
		return indexUnitMap.get(index)!;
	}
}

export default IndexServiceImpl;
