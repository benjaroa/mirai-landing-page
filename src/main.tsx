import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import { Router } from "./Router.tsx";
// import { MetaTags } from "./components/MetaTags.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <MetaTags /> */}
    <Router />
  </React.StrictMode>
);
