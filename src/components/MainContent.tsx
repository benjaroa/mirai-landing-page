import { useTranslation } from "react-i18next";
import { processLinks, type Project } from "./TypesMap";
import { useMediaQuery } from "@/hooks/use-media-query";

export const MainContent = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery("(min-width: 768px)"); // https://ui.shadcn.com/docs/components/drawer

  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
      {(t("projects", { returnObjects: true }) as Project[]).map(
        ({ title, description, links, "img-scr": imgSrc }, index: number) => (
          <div
            key={`project-${index}`}
            className="rounded-lg overflow-hidden shadow-lg dark:outline-1 dark:outline dark:outline-white flex flex-col z-0"
          >
            <picture className="overflow-hidden block">
              <img
                className="w-full transition-all hover:scale-110 ease-in duration-150"
                src={`/assets/${imgSrc}`}
              />
            </picture>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-slate-600 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-4 flex flex-wrap mt-auto">
              {processLinks(links, isDesktop)}
            </div>
          </div>
        )
      )}
    </div>
  );
};
