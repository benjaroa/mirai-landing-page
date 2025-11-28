import { useTranslation } from "react-i18next";
import postalImage from "@/assets/postal.png";

export const DescriptionCard = () => {
  const { t } = useTranslation();

  return (
    <div className="container md:py-20 py-16" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="w-full">
          <img 
            src={postalImage} 
            alt="Mirai" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
        
        {/* Texto */}
        <div className="lg:text-right text-center">
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
    </div>
  );
};
