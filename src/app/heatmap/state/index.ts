import FsHeatmap from "./controller/HeatmapImpl";
import AggregatorServiceImpl from "./service/Aggregator/AggregatorServiceImpl";
import PeriodManagerServiceImpl from "./service/PeriodManager/PeriodManagerServiceImpl";
import CompanyManagerServiceImpl from "./service/CompanyManager/CompanyManagerServiceImpl";
import IndexManagerServiceImpl from "./service/IndexManager/IndexManagerServiceImpl";
import ScalarColorMapperImpl from "./service/Aggregator/module/ScalarColorMapperImpl";
import CompanyRootRepositoryImpl from "./repository/CompanyRepositoryImpl";

const scalarColorMapper = new ScalarColorMapperImpl();
scalarColorMapper.setPositiveColor("#00994C");
scalarColorMapper.setNegativeColor("#FF6666");
const companyRootRepo = new CompanyRootRepositoryImpl();

export const fsHeatmap = new FsHeatmap(
	new PeriodManagerServiceImpl(),
	new IndexManagerServiceImpl(),
	new CompanyManagerServiceImpl(companyRootRepo),
	new AggregatorServiceImpl(scalarColorMapper)
);

export { companySearch } from "@/app/common/state";
