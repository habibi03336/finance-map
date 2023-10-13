import { finance } from "@/app/common/datatype";
import { fsHeatmapData, index, market } from "@/app/heatmap/datatype";

export default interface HeatmapDataService {
	generate: (
		indexs: index[],
		finances: finance[][],
		markets: market[]
	) => fsHeatmapData;
}
