import { period } from "@/app/common/datatype";
import { RawQuarter } from "@/app/common/dto/RawQuarter";
import PeriodServiceImpl from "@/app/dashboard/state/service/period/PeriodServiceImpl";

describe("대시보드 기간 상태 서비스 테스트", () => {
	test("기간 선택 테스트", () => {
		const ps = new PeriodServiceImpl();
		const period: period = {
			start: new RawQuarter(2022, 1),
			end: new RawQuarter(2022, 3),
		};
		ps.updatePeriod(period);
		expect(ps.selectedPeriod()).toEqual({ ...period });
	});

	test("유효 기간을 넘어서는 기간 선택시 무시 테스트", () => {
		const ps = new PeriodServiceImpl();
		const defaultPeriod = ps.selectedPeriod();
		const unavailablePeriod: period = {
			start: new RawQuarter(2020, 4),
			end: new RawQuarter(2300, 4),
		};
		ps.updatePeriod(unavailablePeriod);
		expect(ps.selectedPeriod()).toEqual({ ...defaultPeriod });
	});

	test("시작 기간이 끝나는 기간을 넘어서는 기간 선택시 무시 테스트", () => {
		const ps = new PeriodServiceImpl();
		const defaultPeriod = ps.selectedPeriod();
		const strangePeriod: period = {
			start: new RawQuarter(2022, 4),
			end: new RawQuarter(2022, 1),
		};
		ps.updatePeriod(strangePeriod);
		expect(ps.selectedPeriod()).toEqual({ ...defaultPeriod });
	});

	test("기본 선택 기간 유효성 테스트", () => {
		const ps = new PeriodServiceImpl();
		const defaultPeriod = ps.selectedPeriod();
		const availablePeriod = ps.availablePeriod();
		if (
			defaultPeriod.start.year < availablePeriod.start.year ||
			(defaultPeriod.start.year === availablePeriod.start.year &&
				defaultPeriod.start.quarter < availablePeriod.start.quarter)
		) {
			throw Error("기본 선택된 기간이 유효하지 않습니다.");
		}
		if (
			defaultPeriod.end.year > availablePeriod.end.year ||
			(defaultPeriod.end.year === availablePeriod.end.year &&
				defaultPeriod.end.quarter > availablePeriod.end.quarter)
		) {
			throw Error("기본 선택된 기간이 유효하지 않습니다.");
		}
	});
});
