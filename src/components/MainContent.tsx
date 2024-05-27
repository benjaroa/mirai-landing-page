import { useTranslation } from "react-i18next";
import { getFallback, typesMap } from "./TypesMap";

type Link = {
  target: string;
  className?: string;
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
  return links.map(({ target, title, type, className }, key) => {
    const component = typesMap[type] || getFallback;
    return component({ key, target, title, className });
  });
};

export const MainContent = () => {
  const { t } = useTranslation();
  return (
    <div className="container col-span-2 grid items-start gap-6 lg:col-span-1">
      {(t("projects", { returnObjects: true }) as Project[]).map(
        ({ title, description, links }, index: number) => (
          <div
            key={`project-${index}`}
            className=" grid grid-cols-3 gap-4"
          >
            <div className="">
              <img
                className="object-cover object-center h-60"
                src="/assets/hero-1.jpg"
                alt="nature image"
              />
            </div>
            <div className="col-span-2 h-full">
              <div className="my-3">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
              </div>
              <div className="align-bottom">{processLinks(links)}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
