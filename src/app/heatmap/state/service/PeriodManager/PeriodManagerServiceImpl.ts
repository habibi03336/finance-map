import { period } from "@/app/heatmap/datatype";
import PeriodManagerService from "./PeriodManagerService";
import { RawQuarter } from "@/app/common/dto/RawQuarter";

class PeriodManagerServiceImpl implements PeriodManagerService {
	#availablePeriod: period;
	#period: period;

	constructor() {
		this.#period = {
			start: new RawQuarter(2022, 1),
			end: new RawQuarter(2022, 4),
		};
		this.#availablePeriod = {
			start: new RawQuarter(2016, 1),
			end: new RawQuarter(2023, 1),
		};
	}

	get period() {
		return { ...this.#period };
	}

	get availablePeriod() {
		return { ...this.#availablePeriod };
	}

	update(period: period) {
		this.#period = period;
	}
}

export default PeriodManagerServiceImpl;
