import { company, financeIndex, period } from "@/app/common/datatype";
import { RawQuarter } from "@/app/common/dto/RawQuarter";
import { finance } from "@/app/dashboard/datatype";
import CompanyFinanceRepository from "@/app/dashboard/state/repository/CompanyFinanceRepository";
import DataServiceImpl from "@/app/dashboard/state/service/data/DataServiceImpl";

const mockCfr: CompanyFinanceRepository = {
	getCompanyFinance: function (
		company: company,
		period: period
	): Promise<finance[]> {
		const startQuarter = period.start.year * 4 + period.start.quarter;
		const endQuarter = period.end.year * 4 + period.end.quarter;
		const finances: finance[] = [];
		for (let i = startQuarter; i <= endQuarter; i += 1) {
			const year = Math.floor(i / 4);
			const quarter = (i % 4) as 1 | 2 | 3 | 4;
			finances.push({
				company: company,
				quarter: new RawQuarter(year, quarter),
				sales: 0,
				equity: 0,
				operatingProfit: 0,
				netProfit: 0,
			});
		}
		return new Promise((resolve) => {
			resolve(finances);
		});
	},
};

describe("대시보드 데이터 생성 서비스 테스트", () => {
	test("올바른 데이터 형식으로 반환하는지 테스트", async () => {
		const ds = new DataServiceImpl(mockCfr);
		const dummyCompanies: company[] = [
			{
				companyCode: "1",
				name: "지훈컴퍼니",
				stockCode: "123123",
			},
			{
				companyCode: "2",
				name: "하비비Corp",
				stockCode: "543212",
			},
		];
		const index: financeIndex = "ROE";
		const startYearQuarter: RawQuarter = new RawQuarter(2022, 1);
		const endYearQuarter: RawQuarter = new RawQuarter(2022, 3);
		const dashboard = await ds.generateDashboard(dummyCompanies, index, {
			start: startYearQuarter,
			end: endYearQuarter,
		});

		expect(dashboard.index).toBe(index);
		expect(dashboard.groups.length).toBe(dummyCompanies.length);
		expect(dashboard.groups[0].company).toEqual(dummyCompanies[0]);
		expect(dashboard.groups[1].company).toEqual(dummyCompanies[1]);
		expect(dashboard.groups[0].data.length).toBe(3);
		expect(dashboard.groups[0].data[0].xTitle).toEqual(startYearQuarter);
		expect(dashboard.groups[0].data[2].xTitle).toEqual(endYearQuarter);
	});
});
