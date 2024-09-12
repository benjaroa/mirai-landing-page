import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.ts";
import { Router } from "./Router.tsx";
import { Helmet } from "react-helmet";

const description = {
  en: "Ramen + Fermentation. We use traditional, fine dining and fermentation techniques to fuse contemporary Japanese ramen with the flavors and ingredients of the Latin American cuisine. We are a fermented products factory, we are an experimental ramen bar, we are a team that is not afraid to experiment, make mistakes and try new things.",
  es: "Ramen + Fermentación. Utilizamos técnicas tradicionales, del fine dining y del mundo de la fermentación, para fusionar el ramen japonés contemporáneo con los sabores e ingredientes del paladar latinoamericano. Somos una barra de ramen experimental, somos una fábrica de productos fermentados, somos un equipo que no tiene miedo de experimentar, equivocarse y probar cosas nuevas."
};

const ogData = {
  title: 'Mirai Food Lab',
  description: description.es,
  url: 'https://www.miraifoodlab.cl',
  image: 'https://miraifoodlab.cl/assets/ig-1.jpg',
  siteName: 'Mirai Food Lab',
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <meta name="description" lang="en" content={description.en} />
      <meta name="description" lang="es" content={description.es} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:type" content="business.business" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" lang="es" content={description.es} />
      <meta name="twitter:description" lang="en" content={description.en} />
      <meta name="twitter:image" content={ogData.image} />
    </Helmet>
    <Router />
  </React.StrictMode>
);
