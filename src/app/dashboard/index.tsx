import { observer } from "mobx-react-lite";
import { dashboard, companySearch } from "./state";
import BarChart from "./ui/presentation/barChart";
import {
	PeriodContainer,
	CompanySearchContainer,
	KeyPadContainer,
	IndexFlag,
} from "./ui";
import QuestionMarkIcon from "../common/ui/asset/QuestionMarkIcon";
import Layout from "./ui/design/layout";
import { company, financeIndex, period } from "./datatype";
import { RawQuarter } from "../common/dto/RawQuarter";
import proxyAlertError from "../common/proxyHandler/alertError";
import { dashboardIntro } from "@/subflow/main";

function Dashboard() {
	return (
		<Layout
			indexKeyPadElem={
				<KeyPadContainer
					options={dashboard.availableIndexs().map((index) => {
						return {
							key: index,
							name: index,
							selected: index === dashboard.selectedIndex(),
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
							async (company: company) => dashboard.addCompany(company),
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
						const period = dashboard.selectedPeriod();
						const quarters = RawQuarter.getAllQuartersBetween(
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
					yTickFormat={dashboard.getIndexFormatter()}
					unit={dashboard.getIndexFormatUnit()}
				/>
			}
			periodElem={
				<PeriodContainer
					onUpdatePeriod={
						new Proxy(
							async (period: period) => dashboard.selectPeriod(period),
							proxyAlertError
						)
					}
					availablePeriod={{
						start: dashboard.avaiablePeriod().start,
						end: dashboard.avaiablePeriod().end,
					}}
					period={{
						start: dashboard.selectedPeriod().start,
						end: dashboard.selectedPeriod().end,
					}}
				/>
			}
			introElem={
				<div
					className="w-full cursor-pointer w-7 h-7"
					onClick={() => {
						dashboardIntro();
					}}
				>
					<QuestionMarkIcon />
				</div>
			}
		/>
	);
}

export default observer(Dashboard);
