import { finance, market } from "@/app/common/datatype";
import { company, period } from "../../datatype";
import CompaniesFinancesByPeriodAndMarket from "./CompaniesFinancesByPeriodAndMarket";
import { defaultPeriod } from "@/app/common/constant/period";
import { makeAutoObservable, runInAction } from "mobx";
import CompanyFinanceRepository from "../repository/CompanyFinanceRepository";
import { CompanyMarketRepository } from "../repository/CompanyMarketRepository";

class CompaniesFinancesByPeriodAndMarketImpl
	implements CompaniesFinancesByPeriodAndMarket
{
	public loading: boolean = false;
	public period: period = defaultPeriod;
	public companies: company[] = [];
	public finances: finance[][] = [];
	public markets: market[] = [];

	private financeRepo: CompanyFinanceRepository;
	private marketRepo: CompanyMarketRepository;

	constructor(
		companyFinanceRepository: CompanyFinanceRepository,
		companyMarketRepository: CompanyMarketRepository
	) {
		this.marketRepo = companyMarketRepository;
		this.financeRepo = companyFinanceRepository;
		makeAutoObservable(this);
	}

	async fetchNewCompanyFinancesAndMarket(company: company) {
		this.loading = true;
		try {
			const [finances, market] = await Promise.all([
				this.financeRepo.getCompanyFinances(company, this.period),
				this.marketRepo.getCompanyMarketData(company.stockCode),
			]);
			runInAction(() => {
				this.loading = false;
				this.finances.push(finances);
				this.companies.push(company);
				this.markets.push(market);
			});
		} catch (e) {
			runInAction(() => {
				this.loading = false;
			});
			throw e;
		}
	}

	async updateFinancesByPeriod(period: period) {
		this.loading = true;
		try {
			const finances = await Promise.all(
				this.companies.map((company) =>
					this.financeRepo.getCompanyFinances(company, period)
				)
			);
			runInAction(() => {
				this.finances = finances;
				this.period = period;
				this.loading = false;
			});
		} catch (e) {
			runInAction(() => {
				this.loading = false;
			});
			throw e;
		}
	}

	async addCompany(company: company) {
		if (
			this.companies.some((elem) => elem.companyCode === company.companyCode)
		) {
			return;
		}
		await this.fetchNewCompanyFinancesAndMarket(company);
	}

	removeCompany(company: company) {
		const removeIdx = this.companies.findIndex(
			(elem) => elem.companyCode === company.companyCode
		);
		if (removeIdx == -1) return;

		this.companies = this.companies.filter((e, i) => i != removeIdx);
		this.finances = this.finances.filter((e, i) => i != removeIdx);
		this.markets = this.markets.filter((e, i) => i != removeIdx);
	}

	async updatePeriod(period: period) {
		await this.updateFinancesByPeriod(period);
	}
}

export default CompaniesFinancesByPeriodAndMarketImpl;
