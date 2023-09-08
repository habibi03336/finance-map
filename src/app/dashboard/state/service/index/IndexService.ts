import { financeIndex } from "../../../datatype";

export default interface IndexService {
	selectedIndex: () => financeIndex;
	selectedIndexFormatter: () => (num: number) => string;
	selectedIndexUnit: () => string;
	availableIndex: () => financeIndex[];
	selectIndex: (index: financeIndex) => void;
}
