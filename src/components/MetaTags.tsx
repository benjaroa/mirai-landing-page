import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export const MetaTags = () => {
  const { t, i18n: { language } } = useTranslation();

  const description = `${t("hero.title")}. ${t("hero.main-text")}`;
  const ogData = {
    title: "Mirai Food Lab",
    description: description,
    url: "https://www.miraifoodlab.cl",
    image: "https://www.miraifoodlab.cl/assets/ig-1.jpg",
    siteName: "Mirai Food Lab",
    logoUrl: "https://miraifoodlab.cl/assets/mirai-i-DZE5yT14.png"
  };

  return (
    <Helmet key="react-helmet">
      <meta name="description" content={description} />
      
      <meta property="og:locale" content={language} />"
      <meta property="og:description" lang={language} content={description} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:logo" content={ogData.logoUrl} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:type" content="business.business" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" lang={language} content={description} />
      <meta name="twitter:image" content={ogData.image} />
    </Helmet>
  )
}