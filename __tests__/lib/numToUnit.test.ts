import numToUnit from "@/lib/numToUnit";

describe("숫자를 말하는 원 단위 문자열로 변환 테스트", () => {
	test("0이 들어가는경우", () => {
		expect(numToUnit.speakingNum(0)).toBe("0");
	});
	test("천 단위 숫자가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(4_000)).toBe("0");
	});
	test("만 단위 숫자가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(40_000)).toBe("4만");
	});
	test("만 단위 + 천 단위 숫자가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(402_120)).toBe("40만");
	});
	test("억 단위 숫자가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(902_000_000)).toBe("9억200만");
	});
	test("조 단위 숫자가 들어가는경우", () => {
		expect(numToUnit.speakingNum(1_200_003_000_000)).toBe("1조2000억300만");
	});
	test("천 단위 음수가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(-3210)).toBe("0");
	});
	test("만 단위 음수가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(-3231_210)).toBe("-323만");
	});
	test("억 단위 음수가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(-4443_231_210)).toBe("-44억4323만");
	});
	test("조 단위 음수가 들어가는 경우", () => {
		expect(numToUnit.speakingNum(-723_984_443_231_210)).toBe(
			"-723조9844억4323만"
		);
	});
});

describe("원으로 변환하는 기능 테스트", () => {
	test("양수", () => {
		expect(numToUnit.won(449613)).toBe("449,613(원)");
	});
	test("0", () => {
		expect(numToUnit.won(0)).toBe("0(원)");
	});
	test("음수 + 소수점", () => {
		expect(numToUnit.won(-3596.2506797625583)).toBe("-3,596(원)");
	});
	test("음수", () => {
		expect(numToUnit.won(-359612)).toBe("-359,612(원)");
	});
});
