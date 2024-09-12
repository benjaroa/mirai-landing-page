import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const MetaTags = () => {
  const { i18n: { language } } = useTranslation();

  const description: Record<string, string> = {
    en: "Ramen + Fermentation. We use traditional, fine dining and fermentation techniques to fuse contemporary Japanese ramen with the flavors and ingredients of the Latin American cuisine. We are a fermented products factory, we are an experimental ramen bar, we are a team that is not afraid to experiment, make mistakes and try new things.",
    es: "Ramen + Fermentación. Utilizamos técnicas tradicionales, del fine dining y del mundo de la fermentación, para fusionar el ramen japonés contemporáneo con los sabores e ingredientes del paladar latinoamericano. Somos una barra de ramen experimental, somos una fábrica de productos fermentados, somos un equipo que no tiene miedo de experimentar, equivocarse y probar cosas nuevas."
  };
  
  const ogData = {
    title: "Mirai Food Lab",
    description: description.es,
    url: "https://www.miraifoodlab.cl",
    image: "https://www.miraifoodlab.cl/assets/ig-1.jpg",
    siteName: "Mirai Food Lab",
    logoUrl: "https://miraifoodlab.cl/assets/mirai-i-DZE5yT14.png"
  };

  return (
    <Helmet>
      <meta name="description" content={description[language]} />
      
      <meta property="og:locale" content={language} />"
      <meta property="og:description" lang={language} content={description[language]} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:logo" content={ogData.logoUrl} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:type" content="business.business" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" lang={language} content={description[language]} />
      <meta name="twitter:image" content={ogData.image} />
    </Helmet>
  )
}