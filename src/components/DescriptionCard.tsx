import { useTranslation } from "react-i18next";
import miraiLogo2 from "@/assets/mirai-logo2.png";

export const DescriptionCard = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-row-reverse relative overflow-hidden">
      {/* Logo de fondo */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 z-0">
        <img 
          src={miraiLogo2} 
          alt="Mirai Logo" 
          className="w-96 h-96 opacity-10 object-contain"
        />
      </div>
      
      <div className="text-right w-auto lg:w-3/4 relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl uppercase">
          {t("hero.title")}
          <span className="text-mirai">{t("hero.title-highlight")}</span>
          {t("hero.title-end")}
        </h1>
        <p className="mt-6 leading-8 text-xl text-gray-600">
          {t("hero.main-text")}
        </p>
        <p className="mt-6 leading-8 text-xl text-gray-600">
          {t("hero.secondary-text")}
        </p>
      </div>
    </div>
  );
};
