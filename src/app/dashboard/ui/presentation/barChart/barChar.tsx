import { DesignComponent } from "@/app/common/ui/componentType";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const barChart = ({}: {}) => {
	return ({
		labels,
		datasets,
		title,
		yTickFormat,
		unit,
	}: {
		title: string;
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			backgroundColor: string;
		}[];
		yTickFormat: (num: number) => string;
		unit: string;
	}) => {
		return (
			<Bar
				style={{ height: "100%" }}
				options={{
					plugins: {
						legend: {
							position: "top" as const,
						},
						title: {
							display: true,
							text: title,
						},
					},
					scales: {
						y: {
							title: { display: true, text: unit, align: "end" },
							beginAtZero: true,
							ticks: {
								callback(tickValue, index, ticks) {
									return yTickFormat(Number(tickValue));
								},
							},
						},
					},
					maintainAspectRatio: false,
				}}
				data={{
					labels,
					datasets,
				}}
			/>
		);
	};
};

export default barChart;
