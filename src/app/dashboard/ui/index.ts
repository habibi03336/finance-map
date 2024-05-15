import clickAndSelectAmongOptions from "./container/clickAndSelectAmongOptions";
import optionsWithColorPallete from "./container/optionsWithColorPallete";
import dashboard from "./container/dashboard";
import * as keypad from "./design/keypad";
import * as indexflag from "./design/indexflag";
import * as tabSelection from "./design/tabSelection";
import LoadingIndicator from "@/app/common/ui/asset/LoadingIndicator";
import styled from "styled-components";

export const KeyPadContainer = clickAndSelectAmongOptions({
	Div: keypad.Div,
	Option: keypad.Pad,
	SelectedOption: keypad.SelectedPad,
});

export const TabSelection = clickAndSelectAmongOptions(tabSelection);

export const IndexFlag = optionsWithColorPallete(indexflag);

export const DashboadContainer = dashboard({
	Div: styled.div.attrs({
		className: "relative h-full",
	})``,
	LoadingIndicator: styled(LoadingIndicator)``,
});

export { PeriodContainer, CompanySearchContainer } from "@/app/common/ui";
