import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import mdI18n from "../md-i18n.json";

type I18nMarkdownProps = {
  filename: string;
  className?: string;
  section?: string;
};

const filterMarkdownSection = (markdown: string, section: string): string => {
  if (!section) return markdown;

  // Map section names to their markdown headers
  const sectionMap: Record<string, string[]> = {
    'franklin': ['Factoría Franklin', 'Factoria Franklin'],
    'mut': ['MUT'],
    'partners': ['Partners']
  };

  const sectionHeaders = sectionMap[section.toLowerCase()];
  if (!sectionHeaders) return markdown;

  // Split by ## headers
  const sections = markdown.split(/(?=^## )/gm);
  
  // Find the section that matches
  const matchedSection = sections.find(sec => 
    sectionHeaders.some(header => sec.includes(`## ${header}`))
  );

  if (!matchedSection) return markdown;

  // Return the main title plus the matched section
  const titleMatch = markdown.match(/^# .+$/m);
  const title = titleMatch ? titleMatch[0] : '';
  
  return title + '\n\n' + matchedSection;
};

export const I18nMarkdown = ({ filename, section }: I18nMarkdownProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const markdownKey = `src/md/${lang}/${filename}.md`;
  let markdown = (mdI18n as any)[markdownKey];

  // Filter to specific section if provided
  if (section && markdown) {
    markdown = filterMarkdownSection(markdown, section);
  }

  return <ReactMarkdown className="mb-4" children={markdown} />;
};
