import DashboardControllerImpl from "./controller/DashboardControllerImpl";
import IndexServiceImpl from "./service/index/IndexServiceImpl";
import DataServiceImpl from "./service/data/DataServiceImpl";
import { companiesFinancesByPeriodAndMarket } from "@/app/common/state";

const dashboard = new DashboardControllerImpl(
	companiesFinancesByPeriodAndMarket,
	new DataServiceImpl(),
	new IndexServiceImpl()
);

export { companySearch } from "@/app/common/state";
export { dashboard };
