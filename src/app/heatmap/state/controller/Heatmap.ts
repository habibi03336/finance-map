import { period, index, fsHeatmapData, company } from "../../datatype";

export interface Heatmap {
	FSdata: fsHeatmapData;
	indexes: index[];
	period: period | null;
	addIndex: (index: index) => void;
	removeIndex: (index: index) => void;
	updatePeriod: (period: period) => void;
	removeCompany: (company: company) => void;
	addCompany: (company: company) => void;
	updateCompaniesFinance: (companies: company[]) => void;
}
