import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "./ui/scroll-area";
import mdI18n from "../md-i18n.json";

type I18nMarkdownProps = {
  filename: string;
};

export const I18nMarkdown = ({ filename }: I18nMarkdownProps) => {
  const { i18n } = useTranslation();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const lang = i18n.language;
    const markdownKey = `src/md/${lang}/${filename}.md`;
    setMarkdown((mdI18n as any)[markdownKey]);
  });

  return (
    <ScrollArea className="h-screen prose dark:prose-invert p-4 py-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </ScrollArea>
  );
};
