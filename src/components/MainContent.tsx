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
    // <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    return (
      <span className="inline-block pr-3 py-1 mb-1">
        {component({ key, target, title, className })}
      </span>
    );
  });
};

export const MainContent = () => {
  const { t } = useTranslation();
  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
      {(t("projects", { returnObjects: true }) as Project[]).map(
        ({ title, description, links }, index: number) => (
          <div
            key={`project-${index}`}
            className="rounded overflow-hidden shadow-lg dark:outline-1 dark:outline dark:outline-white flex flex-col z-0 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full"
              src="/assets/hero-1.jpg"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-slate-600 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-4 flex flex-wrap mt-auto">
              {processLinks(links)}
            </div>
          </div>
        )
      )}
    </div>
  );
};

/*
          <div key={`project-${index}`} className="card ">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{backgroundImage: `url('/assets/hero-1.jpg')`}}
                title="Woman holding a mug"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {description}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/img/jonathan.jpg"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                    {processLinks(links)}
                    </p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //////////////////////////////////
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
*/
