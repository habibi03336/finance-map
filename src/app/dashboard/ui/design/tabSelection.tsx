import styled from "styled-components";

export const Div = styled.div.attrs({
	className: "tabs tabs-boxed w-full",
})``;

const option = styled.a.attrs({ className: "tab w-1/2 p-0" });
export const Option = option.attrs({})``;
export const SelectedOption = option.attrs({
	className: "bg-accent text-white",
})``;
