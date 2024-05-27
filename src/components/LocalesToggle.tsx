import { useTranslation } from "react-i18next";

const baseClasses = "text-sm h-8 w-8 border";
const selectedClass = "underline font-bold";
const unSelectedClass = "";

export const LocaleToggle = () => {
  const { i18n } = useTranslation();
  return (
    <div className="inline-flex">
      <button
        className={`${baseClasses} ${i18n.language === "es" ? selectedClass : unSelectedClass} rounded-l border-r-0`}
        value={"es"}
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
      <button
        className={`${baseClasses} ${i18n.language === "en" ? selectedClass : unSelectedClass} rounded-r`}
        value={"en"}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};
