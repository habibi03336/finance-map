import { financeIndex } from "@/app/common/datatype";
import IndexServiceImpl from "@/app/dashboard/state/service/index/IndexServiceImpl";

describe("지표 상태 서비스 테스트", () => {
	test("지표 선택 테스트", () => {
		const is = new IndexServiceImpl();
		const index: financeIndex = "영업이익";
		is.selectIndex(index);

		expect(is.selectedIndex()).toBe(index);
	});
});
