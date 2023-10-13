import { company, period, finance, market } from "../../datatype";

interface CompaniesFinancesByPeriodAndMarket {
	loading: boolean;
	companies: company[];
	period: period;
	finances: finance[][];
	markets: market[];
	addCompany: (company: company) => Promise<void>;
	removeCompany: (company: company) => void;
	updatePeriod: (period: period) => Promise<void>;
}

export default CompaniesFinancesByPeriodAndMarket;
