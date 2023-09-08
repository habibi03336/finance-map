import { observer } from "mobx-react-lite";
import { fsHeatmap, companySearch } from "./state";
import {
	CompanySearchContainer,
	IndexContainer,
	PeriodContainer,
	FsHeatmapContainer,
} from "./ui";
import QuestionMarkIcon from "../common/ui/asset/QuestionMarkIcon";
import { period, company } from "./datatype";
import AppLayout from "./ui/design/layout";
import { heatmapIntro } from "../../subflow/main";
import proxyAlertError from "../common/proxyHandler/alertError";

function FiHeatmapApp() {
	return (
		<AppLayout
			indexElem={
				<IndexContainer
					allIndexs={fsHeatmap.allIndexs()}
					selectedIndexs={fsHeatmap.selectedIndexs()}
					onSelectIndex={(index) => fsHeatmap.addIndex(index)}
					onUnSelectIndex={(index) => fsHeatmap.removeIndex(index)}
				/>
			}
			companySearchElem={
				<CompanySearchContainer
					searchInputHandler={(token) =>
						companySearch.getCompaniesWithNameContains(token)
					}
					onSelectCompany={
						new Proxy(async (company: company) => {
							await fsHeatmap.addCompany(company);
						}, proxyAlertError)
					}
					companiesSearched={companySearch.companiesSearched}
				/>
			}
			fsElem={
				<FsHeatmapContainer
					fsData={fsHeatmap.FSdata}
					loading={fsHeatmap.loading}
					onClickIndex={() => {}}
					onClickCompany={(company) => {
						fsHeatmap.removeCompany(company);
					}}
				/>
			}
			periodElem={
				<PeriodContainer
					onUpdatePeriod={
						new Proxy(async (period: period) => {
							await fsHeatmap.updatePeriod(period);
						}, proxyAlertError)
					}
					period={fsHeatmap.selectedPeriod()}
					availablePeriod={fsHeatmap.availablePeriod()}
				/>
			}
			extraElem={
				<div className="w-full cursor-pointer" onClick={() => heatmapIntro()}>
					<QuestionMarkIcon />
				</div>
			}
		/>
	);
}

export default observer(FiHeatmapApp);
