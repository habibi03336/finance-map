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
	public companies: company[] = [];
	public period: period = defaultPeriod;
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
			const finances = await this.financeRepo.getCompanyFinances(
				company,
				this.period
			);

			const market = await this.marketRepo.getCompanyMarketData(
				company.stockCode
			);
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
		this.companies = this.companies.filter(
			(elem) => elem.companyCode !== company.companyCode
		);
		this.finances = this.finances.filter(
			(elem) => elem[0].company.companyCode !== company.companyCode
		);
		this.markets = this.markets.filter(
			(elem) => elem.stockCode != company.stockCode
		);
	}

	async updatePeriod(period: period) {
		await this.updateFinancesByPeriod(period);
	}
}
export default CompaniesFinancesByPeriodAndMarketImpl;
