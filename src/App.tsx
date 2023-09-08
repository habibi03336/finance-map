import "./App.css";
import FiheatmapApp from "./app/heatmap";
import DashboardApp from "./app/dashboard";
import Router from "./router";
import { overallIntro } from "./subflow/main";

function App() {
	return <Router heatmap={<FiheatmapApp />} dashboard={<DashboardApp />} />;
}

(() => {
	if (localStorage.getItem("overallIntro") === null) {
		overallIntro();
		localStorage.setItem("overallIntro", "done");
	}
})();

export default App;
