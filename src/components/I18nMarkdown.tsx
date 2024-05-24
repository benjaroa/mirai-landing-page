import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "./ui/scroll-area";

type I18nMarkdownProps = {
  filename: string;
};

export const I18nMarkdown = ({ filename }: I18nMarkdownProps) => {
  const { i18n } = useTranslation();
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const lang = i18n.language;
    const path = `../md/${lang}/${filename}.md`;
    import(path)
      .then((module) => {
        setMarkdown(module.default);
      })
      .catch((err) => {
        console.error(err);
        setMarkdown("# Error!");
      });
  });

  return (
    <ScrollArea className="h-screen prose dark:prose-invert p-4 py-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </ScrollArea>
  );
};
