import { index } from "@/app/heatmap/datatype";
import IndexManagerService from "./IndexManagerService";

class IndexManagerServiceImpl implements IndexManagerService {
	#indexs: index[] = ["매출", "영업이익", "순이익", "PER", "ROE", "PBR"];
	#allIndexs: index[] = [
		"매출",
		"영업이익",
		"영업이익률",
		"순이익",
		"자본",
		"주가",
		"시가총액",
		"상장주식수",
		"PER",
		"ROE",
		"PBR",
		"EPS",
		"BPS",
	];

	get selectedIndexs() {
		const selectedIndexInOrder: index[] = [];
		for (let i = 0; i < this.#allIndexs.length; i += 1) {
			if (this.#indexs.includes(this.#allIndexs[i])) {
				selectedIndexInOrder.push(this.#allIndexs[i]);
			}
		}
		return selectedIndexInOrder;
	}

	get allIndexs() {
		return [...this.#allIndexs];
	}

	get notSelectedIndexs() {
		return this.#allIndexs.filter((elem) => !this.#indexs.includes(elem));
	}
	initialize(indexs: index[]) {
		this.#indexs = indexs;
	}
	add(index: index) {
		this.#indexs.push(index);
	}
	delete(targetIndex: index) {
		this.#indexs = this.#indexs.filter((index) => index !== targetIndex);
	}
}

export default IndexManagerServiceImpl;
