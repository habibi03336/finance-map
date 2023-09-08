import DashboardControllerImpl from "./controller/DashboardControllerImpl";
import CompanyServiceImpl from "./service/company/CompanyServiceImpl";
import IndexServiceImpl from "./service/index/IndexServiceImpl";
import PeriodServiceImpl from "./service/period/PeriodServiceImpl";
import DataServiceImpl from "./service/data/DataServiceImpl";
import CompanyFinanceRepositoryImpl from "./repository/CompanyFinanceRepositoryImpl";

const dashboard = new DashboardControllerImpl(
	new CompanyServiceImpl(),
	new IndexServiceImpl(),
	new PeriodServiceImpl(),
	new DataServiceImpl(new CompanyFinanceRepositoryImpl())
);

export { companySearch } from "@/app/common/state";
export { dashboard };
