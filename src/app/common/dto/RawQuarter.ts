export class RawQuarter {
	private _quarter: number = 0;
	constructor(year: number, quarter: 1 | 2 | 3 | 4) {
		this._quarter = year * 4 + quarter - 1;
	}
	get quarter(): 1 | 2 | 3 | 4 {
		return ((this._quarter % 4) + 1) as 1 | 2 | 3 | 4;
	}
	get year(): number {
		return (this._quarter / 4) >> 0;
	}

	public static getAllQuartersBetween(startQ: RawQuarter, endQ: RawQuarter) {
		const quarters: RawQuarter[] = [];
		const start = startQ._quarter;
		const end = endQ._quarter;
		for (let q = start; q <= end; q += 1) {
			quarters.push(
				new RawQuarter((q / 4) >> 0, ((q % 4) + 1) as 1 | 2 | 3 | 4)
			);
		}
		return quarters;
	}
}
