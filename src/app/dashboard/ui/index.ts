import clickAndSelectAmongOptions from "./container/clickAndSelectAmongOptions";
import optionsWithColorPallete from "./container/optionsWithColorPallete";
import * as keypad from "./design/keypad";
import * as indexflag from "./design/indexflag";

export const KeyPadContainer = clickAndSelectAmongOptions({
	Div: keypad.Div,
	Option: keypad.Pad,
	SelectedOption: keypad.SelectedPad,
});

export const IndexFlag = optionsWithColorPallete(indexflag);

export { PeriodContainer, CompanySearchContainer } from "@/app/common/ui";
