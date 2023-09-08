import { DesignComponent } from "@/app/common/ui/componentType";
import {
	BrowserRouter,
	Route,
	Routes,
	NavLink,
	useLocation,
} from "react-router-dom";
export default ({
	Nav,
	NavItem,
	activeClassName,
	nonActiveClassName,
}: {
	Nav: DesignComponent;
	NavItem: DesignComponent;
	activeClassName: string;
	nonActiveClassName: string;
}) => {
	return ({
		heatmap,
		dashboard,
	}: {
		heatmap: JSX.Element;
		dashboard: JSX.Element;
	}) => {
		return (
			<BrowserRouter>
				<Nav>
					<NavLink
						to="/dashboard"
						className={() =>
							["/", "/dashboard"].includes(useLocation().pathname)
								? activeClassName
								: nonActiveClassName
						}
					>
						<NavItem>쉽게 파악 대시보드</NavItem>
					</NavLink>
					<NavLink
						to="/heatmap"
						className={({ isActive }) =>
							isActive ? activeClassName : nonActiveClassName
						}
					>
						<NavItem>쉽게 비교 히트맵</NavItem>
					</NavLink>
				</Nav>
				<Routes>
					<Route path="/dashboard" element={dashboard} />
					<Route path="/heatmap" element={heatmap} />
					<Route path="/" element={dashboard} />
				</Routes>
			</BrowserRouter>
		);
	};
};
