import { company } from "@/app/common/datatype";
import CompanyServiceImpl from "@/app/dashboard/state/service/company/CompanyServiceImpl";

describe("대시보드 기업 상태 서비스 테스트", () => {
	test("기업 추가 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company1: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		cs.addCompany(company1);

		expect(cs.selectedCompany()).toEqual([
			{
				companyCode: "123",
				name: "포스코",
				stockCode: "0034123",
			},
		]);
	});

	test("기업 중복 추가 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		const sameCompany: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		cs.addCompany(company);
		cs.addCompany(sameCompany);

		expect(cs.selectedCompany()).toEqual([
			{
				companyCode: "123",
				name: "포스코",
				stockCode: "0034123",
			},
		]);
	});

	test("기업 삭제 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		cs.addCompany(company);
		cs.removeCompany({ ...company });
		expect(cs.selectedCompany()).toEqual([]);
	});

	test("없는 기업 삭제 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		cs.removeCompany(company);
		expect(cs.selectedCompany()).toEqual([]);
	});

	test("여러 기업 추가 시 순서 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		const company2: company = {
			companyCode: "321",
			name: "에코프로",
			stockCode: "927841",
		};
		const compnay3: company = {
			companyCode: "987",
			name: "한국철강",
			stockCode: "003678",
		};
		cs.addCompany(company);
		cs.addCompany(company2);
		cs.addCompany(compnay3);
		expect(cs.selectedCompany()).toEqual([
			{ ...company },
			{ ...company2 },
			{ ...compnay3 },
		]);
	});

	test("중간 기업 삭제 시 순서 테스트", () => {
		const cs = new CompanyServiceImpl();
		const company: company = {
			companyCode: "123",
			name: "포스코",
			stockCode: "0034123",
		};
		const company2: company = {
			companyCode: "321",
			name: "에코프로",
			stockCode: "927841",
		};
		const compnay3: company = {
			companyCode: "987",
			name: "한국철강",
			stockCode: "003678",
		};
		cs.addCompany(company);
		cs.addCompany(company2);
		cs.addCompany(compnay3);
		cs.removeCompany({ ...company2 });
		expect(cs.selectedCompany()).toEqual([{ ...company }, { ...compnay3 }]);
	});
});
