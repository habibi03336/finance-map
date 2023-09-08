import { CompanyRootRepository } from "@/app/heatmap/state/repository/CompanyRepository";
import CompanyManagerService from "./CompanyManagerService";
import { company, period, companyRoot } from "@/app/heatmap/datatype";

class CompanyManagerServiceImpl implements CompanyManagerService {
	#companies: companyRoot[] = [];
	private companyRepo: CompanyRootRepository;

	constructor(cr: CompanyRootRepository) {
		this.companyRepo = cr;
	}

	get companies() {
		return JSON.parse(JSON.stringify(this.#companies)) as companyRoot[];
	}

	async updatePeriod(period: period) {
		const companyRoots = await Promise.all(
			this.#companies.map((company) =>
				this.companyRepo.getCompanyRootFi(
					company.tag.companyCode,
					company.tag.stockCode,
					period
				)
			)
		);
		this.#companies = companyRoots.map((companyRoot, idx): companyRoot => {
			return { tag: this.#companies[idx].tag, rootData: companyRoot };
		});
	}

	async initialize(companies: company[], period: period) {
		const companyRoots = await Promise.all(
			companies.map((company) =>
				this.companyRepo.getCompanyRootFi(
					company.companyCode,
					company.stockCode,
					period
				)
			)
		);
		this.#companies = companyRoots.map((companyRoot, idx) => {
			return { tag: companies[idx], rootData: companyRoot };
		});
	}

	async add(company: company, period: period) {
		if (
			this.#companies.find(
				(elem) => elem.tag.companyCode === company.companyCode
			)
		) {
			return;
		}
		const data = await this.companyRepo.getCompanyRootFi(
			company.companyCode,
			company.stockCode,
			period
		);
		this.#companies.push({ tag: company, rootData: data });
	}

	getCompaniesRoot(): companyRoot[] {
		return this.#companies;
	}

	delete(targetCompany: company) {
		this.#companies = this.#companies.filter(
			(company) => company.tag.name !== targetCompany.name
		);
	}
}

export default CompanyManagerServiceImpl;
