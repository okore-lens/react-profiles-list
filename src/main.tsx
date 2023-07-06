import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppCtxProvider from "./services/app/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppCtxProvider>
			<App />
		</AppCtxProvider>
	</React.StrictMode>
);
