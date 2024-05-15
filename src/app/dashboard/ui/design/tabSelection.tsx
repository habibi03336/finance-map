import styled from "styled-components";

export const Div = styled.div.attrs({
	className: "tabs tabs-boxed",
})``;

const option = styled.a.attrs({ className: "tab w-1/2" });
export const Option = option.attrs({})``;
export const SelectedOption = option.attrs({
	className: "bg-accent text-white",
})``;
