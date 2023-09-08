import { RawQuarter } from "@/app/common/dto/RawQuarter";

describe("Raw Quarter dto 테스트", () => {
	test("연도, 분기 반환 테스트", () => {
		const year = 2022;
		const quarter = 4;
		const rq = new RawQuarter(year, quarter);

		expect(rq.year).toBe(2022);
		expect(rq.quarter).toBe(4);
	});

	test("기간 사이 분기 생성 테스트", () => {
		const start = new RawQuarter(2019, 3);
		const end = new RawQuarter(2022, 2);
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

		const quarters = RawQuarter.getAllQuartersBetween(start, end);

		expect(quarters.length).toBe(actual.length);
		for (let i = 0; i < actual.length; i += 1) {
			expect(quarters[i].year).toBe(actual[i][0]);
			expect(quarters[i].quarter).toBe(actual[i][1]);
		}
	});
});
