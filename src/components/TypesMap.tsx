import { Suspense } from "react";
import { I18nMarkdown } from "./I18nMarkdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

export type UniversalComponent = {
  key: number,
  target: string,
  title: string
};

export const getFallback = (
  { key, title }: UniversalComponent
) => (<span key={key}>{title}</span>);

export const getDrawer = ({ key, target, title }: UniversalComponent) => (
  <Suspense key={key} fallback="loading...">
    <Sheet>
      <SheetTrigger>
        {title}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <I18nMarkdown filename={target} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </Suspense>
);

const getUrl = ({ key, target, title }: UniversalComponent) => (
  <a key={key} href={target} className="ml-2 text-slate-400 hover:underline">
    [{title}]
  </a>
);

export const typesMap = {
  drawer: getDrawer,
  url: getUrl,
};
