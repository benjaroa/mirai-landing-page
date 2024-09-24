import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const baseClasses = "text-sm h-8 w-8 border";
const selectedClass = "font-bold bg-slate-600 text-white";
const unSelectedClass = "bg-white";

export const LocaleToggle = () => {
  const { i18n } = useTranslation();
  return (
    <div className="inline-flex">
      <Link to="/es">
        <button
          className={`${baseClasses} ${
            i18n.language === "es" ? selectedClass : unSelectedClass
          } rounded-l border-r-0`}
          value={"es"}
          onClick={() => i18n.changeLanguage("es")}
        >
          ES
        </button>
      </Link>
      <Link to="/en">
        <button
          className={`${baseClasses} ${
            i18n.language === "en" ? selectedClass : unSelectedClass
          } rounded-r`}
          value={"en"}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </Link>
    </div>
  );
};
