import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const langs = [
  { code: "en", name: "EN" },
  { code: "es", name: "ES" },
];

export const LocaleToggle = () => {
  const { i18n } = useTranslation();
  return (
    <Select onValueChange={(newLang) => i18n.changeLanguage(newLang)}>
      <SelectTrigger className="mr-4">
        <SelectValue
          aria-label={i18n.language.toUpperCase()}
          placeholder={i18n.language.toUpperCase()}
        />
      </SelectTrigger>
      <SelectContent>
        {langs.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
