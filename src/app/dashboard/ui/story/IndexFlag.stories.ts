import { IndexFlag } from "..";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof IndexFlag> = {
	title: "Dashboard/indexflag",
	component: IndexFlag,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	argTypes: {
		onOptionClick: { action: "clicked" },
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof IndexFlag>;
export const Basic: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		options: [
			{ key: "삼성전자", color: "#e66465", name: "삼성전자" },
			{ key: "sk", color: "#e66465", name: "sk" },
		],
	},
};
