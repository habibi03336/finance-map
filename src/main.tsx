import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import _globalApi from "./globalApi/main";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

declare global {
	interface Window {
		globalApi: {
			confirm: (message: string) => Promise<boolean>;
			alert: (message: string) => Promise<boolean>;
		};
	}
}

window.globalApi = _globalApi;
