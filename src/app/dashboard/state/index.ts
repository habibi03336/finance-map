import DashboardControllerImpl from "./controller/DashboardControllerImpl";
import IndexServiceImpl from "./service/index/IndexServiceImpl";
import DataServiceImpl from "./service/data/DataServiceImpl";
import CompanyFinanceRepositoryImpl from "./repository/CompanyFinanceRepositoryImpl";

const dashboard = new DashboardControllerImpl(
	new DataServiceImpl(new CompanyFinanceRepositoryImpl()),
	new IndexServiceImpl()
);

export { companySearch } from "@/app/common/state";
export { dashboard };
