import { KeyPadContainer } from "..";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof KeyPadContainer> = {
	title: "Dashboard/keypad",
	component: KeyPadContainer,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	argTypes: { onClickOption: { action: "clicked" } },
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof KeyPadContainer>;
export const Basic: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		options: [
			{ key: "ROE", name: "ROE" },
			{ key: "매출", name: "매출" },
			{ key: "순이익", name: "순이익" },
			{ key: "영업이익", name: "영업이익", selected: true },
			{ key: "자본", name: "자본" },
			{ key: "영업이익율", name: "영업이익율" },
			{ key: "부채", name: "부채" },
			{ key: "부채비율", name: "부채비율" },
		],
	},
};

export const WithSelected: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		options: [
			{ key: "ROE", name: "ROE" },
			{ key: "매출", name: "매출" },
			{ key: "순이익", name: "순이익" },
			{ key: "영업이익", name: "영업이익" },
			{ key: "자본", name: "자본" },
			{ key: "영업이익율", name: "영업이익율", selected: true },
		],
	},
};
