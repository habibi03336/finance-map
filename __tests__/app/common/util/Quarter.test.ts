import { quarter } from "@/app/common/datatype";
import Quarter from "@/app/common/util/Quarter";

describe("Quarter util 테스트", () => {
	test("기간 사이 분기 생성 테스트", () => {
		const start: quarter = { year: 2019, quarter: 3 };
		const end: quarter = { year: 2022, quarter: 2 };
		const actual = [
			[2019, 3],
			[2019, 4],
			[2020, 1],
			[2020, 2],
			[2020, 3],
			[2020, 4],
			[2021, 1],
			[2021, 2],
			[2021, 3],
			[2021, 4],
			[2022, 1],
			[2022, 2],
		];

		const quarters = Quarter.getAllQuartersBetween(start, end);

		expect(quarters.length).toBe(actual.length);
		for (let i = 0; i < actual.length; i += 1) {
			expect(quarters[i].year).toBe(actual[i][0]);
			expect(quarters[i].quarter).toBe(actual[i][1]);
		}
	});
});
