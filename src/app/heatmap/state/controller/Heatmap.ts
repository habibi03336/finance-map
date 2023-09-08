import { period, index, fsHeatmapData, company } from "../../datatype";

export interface Heatmap {
	FSdata: fsHeatmapData | null;
	selectedIndexs: () => index[];
	selectedPeriod: () => period;
	selectedCompanies: () => company[];
	allIndexs: () => index[];
	availablePeriod: () => period;
	addCompany: (company: company) => void;
	removeCompany: (company: company) => void;
	addIndex: (index: index) => void;
	removeIndex: (index: index) => void;
	updatePeriod: (period: period) => void;
}
