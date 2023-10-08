import { period } from "@/app/common/datatype";
import PeriodService from "./PeriodService";
import { RawQuarter } from "@/app/common/dto/RawQuarter";

class PeriodServiceImpl implements PeriodService {
	private periodAvailable: period = {
		start: new RawQuarter(2016, 1),
		end: RawQuarter.mostLatestQuarterAvailable(),
	};
	private periodChosen: period = {
		start: new RawQuarter(2021, 1),
		end: RawQuarter.mostLatestQuarterAvailable(1),
	};

	availablePeriod() {
		return this.periodAvailable;
	}

	selectedPeriod() {
		return this.periodChosen;
	}

	updatePeriod(period: period) {
		if (this.isValidPeriod(period)) {
			this.periodChosen = period;
		}
	}

	private isValidPeriod(period: period): boolean {
		if (
			period.start.year > period.end.year ||
			(period.start.year === period.end.year &&
				period.start.quarter > period.end.quarter)
		) {
			return false;
		}
		if (
			period.start.year < this.periodAvailable.start.year ||
			(period.start.year === this.periodAvailable.start.year &&
				period.start.quarter < this.periodAvailable.start.quarter)
		) {
			return false;
		}
		if (
			period.end.year > this.periodAvailable.end.year ||
			(period.end.year === this.periodAvailable.end.year &&
				period.end.quarter > this.periodAvailable.end.quarter)
		) {
			return false;
		}
		return true;
	}
}

export default PeriodServiceImpl;
