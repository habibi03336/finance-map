import { observer } from "mobx-react-lite";
import { dashboard, companySearch } from "./state";
import BarChart from "./ui/presentation/barChart";
import {
	PeriodContainer,
	CompanySearchContainer,
	KeyPadContainer,
	IndexFlag,
} from "./ui";
import QuestionMarkIcon from "@/app/common/ui/asset/QuestionMarkIcon";
import Layout from "./ui/design/layout";
import { company, financeIndex, period } from "./datatype";
import Quarter from "../common/util/Quarter";
import proxyAlertError from "../common/proxyHandler/alertError";
import { dashboardIntro } from "@/subflow/main";
import { allFinanceIndexs } from "./constant";
import { availablePeriod } from "../common/constant/period";
import { FinanceSourceDetailContainer } from "../common/ui";

function Dashboard() {
	return (
		<Layout
			indexKeyPadElem={
				<KeyPadContainer
					options={allFinanceIndexs.map((index) => {
						return {
							key: index,
							name: index,
							selected: index === dashboard.index,
						};
					})}
					onClickOption={(key: string) => {
						dashboard.selectIndex(key as financeIndex);
					}}
				/>
			}
			companySearchElem={
				<CompanySearchContainer
					companiesSearched={companySearch.companiesSearched}
					searchInputHandler={(token: string) =>
						companySearch.getCompaniesWithNameContains(token)
					}
					onSelectCompany={
						new Proxy(
							async (company: company) => await dashboard.addCompany(company),
							proxyAlertError
						)
					}
				/>
			}
			companySelectedElem={
				<IndexFlag
					options={
						dashboard.dashboard?.groups.map((group) => {
							return {
								key: group.company,
								name: group.company.name,
								color: group.color,
							};
						}) || []
					}
					onOptionClick={async (key: company) => {
						if (
							await window.globalApi.confirm(`${key.name}을 삭제하시겠습니까?`)
						) {
							dashboard.removeCompany(key);
						}
					}}
					onColorChange={(company, e) =>
						dashboard.changeCompanyColor(company, e.target.value)
					}
				/>
			}
			chartElem={
				<BarChart
					title={dashboard.dashboard ? dashboard.dashboard.index : ""}
					labels={(() => {
						const period = dashboard.period;
						const quarters = Quarter.getAllQuartersBetween(
							period.start,
							period.end
						);
						return quarters.map((q) => `${q.year}-${q.quarter}`);
					})()}
					datasets={(() => {
						if (dashboard.dashboard === null) return [];
						const datasets = [];
						for (let group of dashboard.dashboard.groups) {
							const dataset = {
								label: group.company.name,
								data: group.data.map((bar) => (bar.yData ? bar.yData : 0)),
								backgroundColor: group.color,
							};
							datasets.push(dataset);
						}
						return datasets;
					})()}
					yTickFormat={dashboard.indexFormatter}
					unit={dashboard.indexUnit}
				/>
			}
			periodElem={
				<PeriodContainer
					onUpdatePeriod={
						new Proxy(
							async (period: period) => await dashboard.selectPeriod(period),
							proxyAlertError
						)
					}
					availablePeriod={{
						start: availablePeriod.start,
						end: availablePeriod.end,
					}}
					period={{
						start: dashboard.period.start,
						end: dashboard.period.end,
					}}
				/>
			}
			dataDetailElem={
				<FinanceSourceDetailContainer finances={dashboard.finances} />
			}
			introElem={
				<QuestionMarkIcon
					onClick={() => {
						dashboardIntro();
					}}
				/>
			}
		/>
	);
}

export default observer(Dashboard);
