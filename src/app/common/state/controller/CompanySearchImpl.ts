import { makeAutoObservable } from "mobx";
import { CompanySearcher } from "../service/CompanySearcher";
import { CompanySearch } from "./CompanySearch";
import { company } from "../../datatype";

class CompanySearchImpl implements CompanySearch {
	companiesSearched: company[] = [];
	#companySearcher;

	constructor(companySearcher: CompanySearcher) {
		this.#companySearcher = companySearcher;
		makeAutoObservable(this);
	}

	async getCompaniesWithNameContains(token: string) {
		this.updateSearchResult(await this.#companySearcher.search(token));
	}

	private updateSearchResult(searchResult: company[]) {
		this.companiesSearched = searchResult;
	}
}

export default CompanySearchImpl;
