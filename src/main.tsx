import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import { Router } from "./Router.tsx";
import ReactGA from "react-ga4";
import { HelmetProvider } from 'react-helmet-async';
import { MetaTags } from "./components/MetaTags.tsx";

if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize("G-GGNKDSPYZ3");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <React.StrictMode>
      <MetaTags />
      <Router />
    </React.StrictMode>
  </HelmetProvider>
);
