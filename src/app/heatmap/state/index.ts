import FsHeatmap from "./controller/HeatmapImpl";
import AggregatorServiceImpl from "./service/Aggregator/AggregatorServiceImpl";
import ScalarColorMapperImpl from "./service/Aggregator/module/ScalarColorMapperImpl";
import CompanyRootRepositoryImpl from "./repository/CompanyRepositoryImpl";
import CompanyFinanceFetcherImpl from "./service/CompanyFinanceFetcher/CompanyFinanceFetcherImpl";

const scalarColorMapper = new ScalarColorMapperImpl();
scalarColorMapper.setPositiveColor("#00994C");
scalarColorMapper.setNegativeColor("#FF6666");
const companyRootRepo = new CompanyRootRepositoryImpl();

export const fsHeatmap = new FsHeatmap(
	new AggregatorServiceImpl(scalarColorMapper),
	new CompanyFinanceFetcherImpl(companyRootRepo)
);

export { companySearch } from "@/app/common/state";
