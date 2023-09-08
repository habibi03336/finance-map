import { period } from "../../../datatype";

export default interface PeriodService {
	availablePeriod: () => period;
	selectedPeriod: () => period;
	updatePeriod: (period: period) => void;
}
