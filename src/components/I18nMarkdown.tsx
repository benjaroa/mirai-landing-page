import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import mdI18n from "../md-i18n.json";

type I18nMarkdownProps = {
  filename: string;
  className?: string;
};

export const I18nMarkdown = ({ filename }: I18nMarkdownProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const markdownKey = `src/md/${lang}/${filename}.md`;
  const markdown = (mdI18n as any)[markdownKey];

  return (
      <ReactMarkdown children={markdown} />
  );
};
