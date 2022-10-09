import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import { Provider } from "react-redux";
import store from "@/store";
import "@/utils/rem-layout.js";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
