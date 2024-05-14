import { quarter } from "../datatype";

class Quarter {
	public static getAllQuartersBetween(startQ: quarter, endQ: quarter) {
		const quarters: quarter[] = [];
		const startQuarter = Quarter.inQuarterUnit(startQ);
		const endQuarter = Quarter.inQuarterUnit(endQ);
		for (let q = startQuarter; q <= endQuarter; q += 1) {
			quarters.push(Quarter.inNormalForm(q));
		}
		return quarters;
	}

	public static inNormalForm(quarterUnit: number) {
		return {
			year: (quarterUnit / 4) >> 0,
			quarter: ((quarterUnit % 4) + 1) as 1 | 2 | 3 | 4,
		};
	}

	public static inQuarterUnit(quarter: quarter) {
		return quarter.year * 4 + quarter.quarter - 1;
	}

	public static mostLatestQuarterAvailable(monthOffset = 0): quarter {
		const now = new Date();
		let year = now.getFullYear();
		let quarter: 1 | 2 | 3 | 4 = 1;
		const month = now.getMonth() - monthOffset + 1;
		if (month < 3) {
			year -= 1;
			quarter = 3;
		} else if (month < 5) {
			year -= 1;
			quarter = 4;
		} else if (month < 8) {
			quarter = 1;
		} else if (month < 11) {
			quarter = 2;
		} else {
			quarter = 3;
		}
		return { year, quarter };
	}
}
export default Quarter;
