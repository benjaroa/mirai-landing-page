import { useTranslation } from "react-i18next";

export const TopHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="container mb-4">
      <div className="flex items-start justify-between py-4">
        <a className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <span className="font-bold text-4xl">Mirai Food Lab</span>
            <span className="text-muted-foreground text-xl">
              {t("hero.main-text")}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
