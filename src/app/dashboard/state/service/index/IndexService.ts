import { financeIndex } from "../../../datatype";

export default interface IndexService {
	getFormatter: (index: financeIndex) => (num: number) => string;
	getUnit: (index: financeIndex) => string;
}
