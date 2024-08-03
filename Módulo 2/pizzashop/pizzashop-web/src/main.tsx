import { App } from "./app";
import React from "react";
import ReactDOM from "react-dom/client";
import { enableMSW } from "./api/mocks/index";

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
