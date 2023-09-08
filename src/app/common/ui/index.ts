import period from "./container/period";
import { Option, Input } from "./design/common";
import companySearch from "./container/companySearch";
import periodDesign from "./design/container/period";
import companySearchDesign from "./design/container/companySearch";

export const PeriodContainer = period({
	...periodDesign,
	Option,
});

export const CompanySearchContainer = companySearch({
	...companySearchDesign,
	Input,
});
