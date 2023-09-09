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
	private indexChosen: financeIndex = "매출";
	private indexs: financeIndex[] = [
		"매출",
		"영업이익",
		"순이익",
		"영업이익률",
		"자본",
		"부채",
		"현금성자산",
		"ROE",
	];

	selectedIndexFormatter() {
		return indexFormatterMap.get(this.indexChosen)!;
	}
	selectedIndexUnit() {
		return indexUnitMap.get(this.indexChosen)!;
	}

	selectedIndex() {
		return this.indexChosen;
	}
	availableIndex() {
		return [...this.indexs];
	}
	selectIndex(index: financeIndex) {
		this.indexChosen = index;
	}
}

export default IndexServiceImpl;
