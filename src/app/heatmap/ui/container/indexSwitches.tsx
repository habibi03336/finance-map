import { index } from "../../datatype";
import {
	DesignComponent,
	DesignInputComponent,
} from "../../../common/ui/componentType";

export default function ({
	IndexItem,
	Label,
	Checker,
}: {
	IndexItem: DesignComponent;
	Label: DesignComponent;
	Checker: DesignInputComponent;
}) {
	return function ({
		allIndexs,
		selectedIndexs,
		onSelectIndex,
		onUnSelectIndex,
	}: {
		allIndexs: index[];
		selectedIndexs: index[];
		onSelectIndex: (index: index) => void;
		onUnSelectIndex: (index: index) => void;
	}) {
		return (
			<>
				{allIndexs.map((index) => {
					const isSelectedIndex = selectedIndexs.includes(index);
					return (
						<IndexItem key={index}>
							<Label>{index}</Label>
							<Checker
								onChange={() => {
									if (isSelectedIndex) {
										onUnSelectIndex(index);
									} else {
										onSelectIndex(index);
									}
								}}
								checked={isSelectedIndex}
							/>
						</IndexItem>
					);
				})}
			</>
		);
	};
}
