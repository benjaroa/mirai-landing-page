import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { I18nMarkdown } from "./I18nMarkdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export const MainContent = () => {
  const { t } = useTranslation();

  type Link = {
    target: string;
    icon: string;
    title: string;
    type: "drawer" | "url";
  };
  type Project = { title: string; description: string; links: Link[] };

  const getDrawer = (key: number, filename: string, title: string) => (
    <Suspense key={key} fallback="loading...">
      <Sheet>
        <SheetTrigger className="ml-2 text-slate-400 hover:underline inline">
          [{title}]
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <I18nMarkdown filename={filename} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </Suspense>
  );

  const getLink = (key: number, target: string, title: string) => (
    <a key={key} href={target} className="ml-2 text-slate-400 hover:underline">
      [{title}]
    </a>
  );

  const typesMap = {
    "drawer": getDrawer,
    "url": getLink,
  };

  const processLinks = (links: Link[]) => {
    return links.map(({ target, title, type }, key) => {
      const component = typesMap[type] || ((key: number) => (<span key={key}>{title}</span>));
      return component(key, target, title);
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
