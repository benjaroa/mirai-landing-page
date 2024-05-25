import { useTranslation } from "react-i18next";
import { getFallback, typesMap } from "./TypesMap";

export const MainContent = () => {
  const { t } = useTranslation();

  type Link = {
    target: string;
    icon: string;
    title: string;
    type: "drawer" | "url";
  };
  type Project = {
    title: string;
    description: string;
    links: Link[];
  };

  const processLinks = (links: Link[]) => {
    return links.map(({ target, title, type }, key) => {
      const component = typesMap[type] || getFallback;
      return component({ key, target, title });
    });
  };

  return (
    <div className="container col-span-2 grid items-start gap-6 lg:col-span-1">
      {(t("projects", { returnObjects: true }) as Project[]).map(
        ({ title, description, links }, index: number) => (
          <div
            key={`project-${index}`}
            className="border-l-4 border-slate-200 p-4 mb-4"
          >
            <div className="my-3">
              <h2 className="font-bold text-xl mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div>{processLinks(links)}</div>
          </div>
        )
      )}
    </div>
  );
};
