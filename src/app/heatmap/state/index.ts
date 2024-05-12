import FsHeatmap from "./controller/HeatmapImpl";
import HeatmapDataServiceImpl from "./service/HeatmapDataService/HeatmapDataServiceImpl";
import ScalarColorMapperImpl from "./service/HeatmapDataService/module/ScalarColorMapperImpl";
import { companiesFinancesByPeriodAndMarket } from "@/app/common/state";

const scalarColorMapper = new ScalarColorMapperImpl();
scalarColorMapper.setPositiveColor("#00994C");
scalarColorMapper.setNegativeColor("#FF6666");

export const fsHeatmap = new FsHeatmap(
	companiesFinancesByPeriodAndMarket,
	new HeatmapDataServiceImpl(scalarColorMapper)
);

export { companySearch } from "@/app/common/state";

export { companiesFinancesByPeriodAndMarket } from "@/app/common/state";
