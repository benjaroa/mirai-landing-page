import { useTranslation } from "react-i18next";

export const DescriptionCard = () => {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-row-reverse">
      <div className="text-right w-2/3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {t("hero.title")}
        </h1>
        <h2 className="mt-6 text-lg leading-8 text-gray-700">
          {t("hero.main-text")}
        </h2>
        <h2 className="mt-6 text-lg leading-8 text-gray-700">
          {t("hero.secondary-text")}
        </h2>
      </div>
    </div>
  );
};
