import period from "./container/period";
import companySearch from "./container/companySearch";
import financeSourceDetail from "./container/financeSourceDetail";
import { Option, Input, Div } from "./design/common";
import periodDesign from "./design/container/period";
import companySearchDesign from "./design/container/companySearch";
import financeSourceDetailDesign from "./design/container/financeSourceDetail";

export const PeriodContainer = period({
	...periodDesign,
	Option,
});

export const CompanySearchContainer = companySearch({
	...companySearchDesign,
	Input,
});

export const FinanceSourceDetailContainer = financeSourceDetail(
	financeSourceDetailDesign
);
