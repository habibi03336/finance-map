import { DesignComponent } from "@/app/common/ui/componentType";

export default ({
	Div,
	Option,
	SelectedOption,
}: {
	Div: DesignComponent;
	Option: DesignComponent;
	SelectedOption: DesignComponent;
}) => {
	return ({
		options,
		onClickOption,
	}: {
		options: { key: any; name: string; selected?: boolean }[];
		onClickOption: (key: any) => void;
	}) => {
		return (
			<Div>
				{options.map((option) => {
					return option.selected ? (
						<SelectedOption
							key={option.key}
							onClick={() => onClickOption(option.key)}
						>
							{" "}
							{option.name}
						</SelectedOption>
					) : (
						<Option key={option.key} onClick={() => onClickOption(option.key)}>
							{option.name}
						</Option>
					);
				})}
			</Div>
		);
	};
};
