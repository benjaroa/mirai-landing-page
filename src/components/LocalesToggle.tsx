import { useTranslation } from "react-i18next";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const langs = [
  { code: "en", name: "EN" },
  { code: "es", name: "ES" },
];

export const LocaleToggle = () => {
  const { i18n } = useTranslation();
  return (
    <ToggleGroup type="single" defaultValue={ i18n.language }>
      {langs.map(({ code, name }) => (
        <ToggleGroupItem
          className={ i18n.language === code ? 'accent-slate-50' : '' }
          key={ code }
          value={ code }
          onClick={ () => i18n.changeLanguage(code) }>
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
