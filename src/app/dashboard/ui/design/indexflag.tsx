import styled from "styled-components";

export const Div = styled.div.attrs({
	className: "kbd p-2 flex flex-col flex-start gap-2 max-w-s",
})``;
export const ColorInput = styled.input.attrs({
	type: "color",
	className: "col-span-1 h-auto w-full opacity-0",
})``;
export const Content = styled.div.attrs({
	className:
		"col-span-3 bg-base-100 text-center rounded-md bg-slate-100 text-black",
})``;
export const Option = styled.div.attrs({
	className: "p-1 grid grid-rows-1 grid-cols-4 rounded-md gap-1 w-full",
})``;
