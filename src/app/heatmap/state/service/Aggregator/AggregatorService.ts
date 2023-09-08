import { companyRoot, fsHeatmapData, index } from "@/app/heatmap/datatype";

export default interface AggregatorService {
	getFSData: (indexs: index[], companies: companyRoot[]) => fsHeatmapData;
}
