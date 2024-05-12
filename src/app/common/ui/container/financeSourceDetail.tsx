import { finance, FinancialIndex } from "@/app/common/datatype";
import { DesignComponent } from "../componentType";
import { useEffect, useState } from "react";

const explainNotExistData = (finance: finance) => {
	if (finance.reportCode === null) {
		return "재무제표 데이터가 없습니다.";
	}
	const notExistIndexs: string[] = Object.keys(FinancialIndex)
		.filter(
			// @ts-ignore
			(i) => finance[FinancialIndex[i].split("-")[0]] === null
		)
		// @ts-ignore
		.map((i) => FinancialIndex[i].split("-")[1]);
	if (notExistIndexs.length == 0) return "-";
	return notExistIndexs.join(", ") + " 데이터가 없습니다.";
};

export default function ({
	Div,
	Nav,
	NavItem,
	Table,
	TableHead,
	TableBody,
	TableRow,
	Th,
	Td,
	LinkSVG,
}: {
	Div: DesignComponent;
	Nav: DesignComponent;
	NavItem: DesignComponent;
	Table: DesignComponent;
	TableHead: DesignComponent;
	TableBody: DesignComponent;
	TableRow: DesignComponent;
	Th: DesignComponent;
	Td: DesignComponent;
	LinkSVG: DesignComponent;
}) {
	return function ({ finances }: { finances: finance[][] }) {
		if (finances.length === 0) return <></>;
		const [selectedCompany, setSelectedCompany] = useState<string>(
			finances[0][0].company.name
		);
		if (!finances.map((e) => e[0].company.name).includes(selectedCompany)) {
			setSelectedCompany(finances[0][0].company.name);
		}
		return (
			<Div>
				<Nav>
					{finances.map((fa) => {
						const companyName = fa[0].company.name;
						return (
							<NavItem
								key={companyName}
								onClick={() => setSelectedCompany(companyName)}
								active={selectedCompany === companyName}
							>
								{companyName}
							</NavItem>
						);
					})}
				</Nav>
				<Table>
					<TableHead>
						<TableRow>
							<Th>연도</Th>
							<Th>분기</Th>
							<Th>누락 사항</Th>
							<Th>보고서 분류</Th>
							<Th>보고서 링크</Th>
						</TableRow>
					</TableHead>
					<TableBody>
						{finances
							.find((e) => e[0].company.name === selectedCompany)
							?.map((e) => {
								return (
									<TableRow
										key={`${e.company.companyCode}-${e.quarter.year}-${e.quarter.quarter}`}
									>
										<Td>{e.quarter.year}</Td>
										<Td>{e.quarter.quarter}</Td>
										<Td>{explainNotExistData(e)}</Td>
										<Td>
											{e.reportType
												? e.reportType?.split(" ")[1] + "  " + "연결"
												: ""}
										</Td>
										<Td>
											{e.reportCode && (
												<a
													target="_blank"
													href={
														"https://dart.fss.or.kr/dsaf001/main.do?rcpNo=" +
														e.reportCode
													}
												>
													<LinkSVG />
												</a>
											)}
										</Td>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</Div>
		);
	};
}
