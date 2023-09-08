import fsHeatmap from "./container/fsHeatmap";
import indexSwitch from "./container/indexSwitches";
import { Label, Checker } from "../../common/ui/design/common";
import indexSwitchesDesign from "./design/components/indexSwitches";
import fsheatmap from "./design/components/fsheatmap";

export const FsHeatmapContainer = fsHeatmap({ ...fsheatmap });
export const IndexContainer = indexSwitch({
	Checker,
	Label,
	IndexItem: indexSwitchesDesign.Item,
});
export { PeriodContainer, CompanySearchContainer } from "@/app/common/ui";
