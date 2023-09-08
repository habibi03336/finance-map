import { index } from "@/app/heatmap/datatype";

export default interface IndexManagerService {
	allIndexs: index[];
	selectedIndexs: index[];
	notSelectedIndexs: index[];
	initialize: (indexs: index[]) => void;
	add: (target: index) => void;
	delete: (target: index) => void;
}
