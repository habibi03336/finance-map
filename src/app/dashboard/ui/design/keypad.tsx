import styled from "styled-components";

export const Div = styled.div.attrs({
	className: "grid grid-cols-3 gap-1 border-2 rounded-md kbd p-2",
})``;

const pad = styled.div.attrs({
	className:
		"flex justify-center items-center border-2 rounded-md min-h-12 kbd",
});
export const Pad = pad``;
export const SelectedPad = pad.attrs({ className: "btn-accent" })``;
