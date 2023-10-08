import { RawQuarter } from "@/app/common/dto/RawQuarter";

export const availablePeriod = {
	start: new RawQuarter(2016, 1),
	end: RawQuarter.mostLatestQuarterAvailable(),
};
export const defaultPeriod = {
	start: new RawQuarter(2021, 1),
	end: RawQuarter.mostLatestQuarterAvailable(1),
};
