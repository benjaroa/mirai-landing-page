import { Suspense } from "react";
import { I18nMarkdown } from "./I18nMarkdown";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export type UniversalComponent = {
  key?: number,
  target: string,
  title?: string
  className?: string
};

export const getFallback = (
  { key, title, className }: UniversalComponent
) => (<span key={key} className={className}>{title}</span>);

export const getDrawer = ({ key, target, title, className }: UniversalComponent) => (
  <Suspense key={key} fallback="loading...">
    <Sheet>
      <SheetTrigger className={className}>
        {title}
      </SheetTrigger>
      <SheetContent>
        <I18nMarkdown className={className} filename={target} />
      </SheetContent>
    </Sheet>
  </Suspense>
);

const getUrl = ({ key, target, title, className }: UniversalComponent) => (
  <a key={key} href={target} className={`${className} text-slate-400 hover:underline`}>
    {title}
  </a>
);

export const typesMap = {
  drawer: getDrawer,
  url: getUrl,
};
