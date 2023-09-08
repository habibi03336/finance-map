import { fsHeatmapData, index, company } from "@/app/heatmap/datatype";
import { Heatmap } from "../presentation/main";
import { DesignComponent } from "../../../common/ui/componentType";

export default function ({
	Div,
	LoadingIndicator,
}: {
	Div: DesignComponent;
	LoadingIndicator: DesignComponent;
}) {
	return function ({
		fsData,
		loading,
		onClickIndex,
		onClickCompany,
	}: {
		fsData: fsHeatmapData | null;
		loading: boolean;
		onClickIndex: (index: index) => void;
		onClickCompany: (company: company) => void;
	}) {
		if (fsData == null) {
			return <div></div>;
		}
		return (
			<Div>
				<Heatmap
					title={""}
					heads={fsData.companies.map((company) => company.name)}
					rows={fsData.rows.map((row) => row.data)}
					rowHeads={fsData.rows.map((row) => row.title)}
					onClickRowHead={() => {}}
					onClickHeaderElem={async (targetName) => {
						const row = fsData.companies.find(
							(company) => company.name === targetName
						);
						if (
							row &&
							(await window.globalApi.confirm(`${row.name}을 삭제합니다.`))
						)
							onClickCompany(row);
					}}
				/>
				{loading && <LoadingIndicator />}
			</Div>
		);
	};
}
