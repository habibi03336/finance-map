import Quarter from "@/app/common/util/Quarter";
import { period } from "../datatype";

export const availablePeriod: period = {
	start: { year: 2016, quarter: 1 },
	end: Quarter.mostLatestQuarterAvailable(),
};

export const defaultPeriod: period = {
	start: { year: 2021, quarter: 1 },
	end: Quarter.mostLatestQuarterAvailable(1),
};
