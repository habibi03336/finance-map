import { TabSelection } from "..";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof TabSelection> = {
	title: "Dashboard/tabSelection",
	component: TabSelection,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	argTypes: { onClickOption: { action: "clicked" } },

	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof TabSelection>;
export const Basic: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		options: [
			{ key: "분기별", name: "분기별", selected: true },
			{ key: "연도별", name: "연도별", selected: false },
		],
	},
};
