import { DesignComponent } from "../../../common/ui/componentType";
import BarChart from "../presentation/barChart";

export default function ({
	Div,
	LoadingIndicator,
}: {
	Div: DesignComponent;
	LoadingIndicator: DesignComponent;
}) {
	return function ({
		loading,
		labels,
		datasets,
		title,
		yTickFormat,
		unit,
	}: {
		loading: boolean;
		title: string;
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string;
		}[];
		yTickFormat: (num: number) => string;
		unit: string;
	}) {
		return (
			<Div>
				<BarChart
					title={title}
					labels={labels}
					datasets={datasets}
					yTickFormat={yTickFormat}
					unit={unit}
				/>
				{loading && <LoadingIndicator />}
			</Div>
		);
	};
}
