import { companyRoot, company, period } from "@/app/heatmap/datatype";

export default interface CompanyManagerService {
	companies: companyRoot[];
	initialize: (companies: company[], period: period) => Promise<void>;
	getCompaniesRoot: () => companyRoot[];
	updatePeriod: (period: period) => Promise<void>;
	add: (companyName: company, period: period) => Promise<void>;
	delete: (companyName: company) => void;
}
