import { period } from "@/app/heatmap/datatype";

export default interface PeriodManagerService {
	availablePeriod: period;
	period: period;
	update: (target: period) => void;
}
