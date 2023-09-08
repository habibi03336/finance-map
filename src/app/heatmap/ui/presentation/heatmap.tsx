import { DesignComponent } from "../../../common/ui/componentType";
import colorWhiteOrBlackByBackgroundColor from "./whiteOrBlackByBackgroudColor";

export default function ({
	Div,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Text,
}: {
	Div: DesignComponent;
	Table: DesignComponent;
	Thead: DesignComponent;
	Tr: DesignComponent;
	Th: DesignComponent;
	Tbody: DesignComponent;
	Td: DesignComponent;
	Text: DesignComponent;
}) {
	return function ({
		title,
		heads,
		rows,
		rowHeads,
		onClickRowHead,
		onClickHeaderElem,
	}: {
		title: string;
		heads: string[] | undefined;
		rowHeads: string[] | undefined;
		rows: { color: string; data: string }[][] | undefined;
		onClickRowHead: (targetName: string) => void;
		onClickHeaderElem: (targetName: string) => void;
	}) {
		if (heads === undefined || rows === undefined || rowHeads === undefined) {
			return <Div>히트맵을 그리기 위한 데이터를 선택해주세요</Div>;
		}
		return (
			<Div>
				<Table>
					<Thead>
						<Tr>
							<Th>{title}</Th>
							{heads.map((head) => (
								<Th onClick={() => onClickHeaderElem(head)} key={head}>
									{head}
								</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{rows.map((row, idx) => (
							<Tr key={rowHeads[idx]}>
								<Th onClick={() => onClickRowHead(rowHeads[idx])}>
									{rowHeads[idx]}
								</Th>
								{row.map((elem, idx) => {
									return (
										<Td
											style={{ backgroundColor: elem.color }}
											key={heads[idx]}
										>
											<Text
												style={{
													color: colorWhiteOrBlackByBackgroundColor(elem.color),
												}}
											>
												{elem.data}
											</Text>
										</Td>
									);
								})}
							</Tr>
						))}
					</Tbody>
				</Table>
			</Div>
		);
	};
}
