import {
	DesignComponent,
	DesignInputComponent,
} from "@/app/common/ui/componentType";

export default ({
	Div,
	Option,
	Content,
	ColorInput,
}: {
	Div: DesignComponent;
	Option: DesignComponent;
	Content: DesignComponent;
	ColorInput: DesignInputComponent;
}) => {
	return ({
		options,
		onOptionClick,
		onColorChange,
	}: {
		options: { key: any; name: string; color: string }[];
		onOptionClick: (key: any) => void;
		onColorChange: (key: any, e: React.ChangeEvent<HTMLInputElement>) => void;
	}) => {
		return (
			<Div>
				{options.map((option) => (
					<Option
						key={JSON.stringify(option.key)}
						style={{ backgroundColor: option.color }}
					>
						<Content onClick={() => onOptionClick(option.key)}>
							{option.name}
						</Content>
						<ColorInput
							value={option.color}
							onChange={(e) => onColorChange(option.key, e)}
						/>
					</Option>
				))}
			</Div>
		);
	};
};
