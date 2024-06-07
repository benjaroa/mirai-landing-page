import { Suspense } from "react";
import { I18nMarkdown } from "./I18nMarkdown";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export type UniversalComponent = {
  key?: number;
  target: string;
  title?: string;
  className?: string;
};

export const getFallback = ({ key, title, className }: UniversalComponent) => (
  <span key={key} className={className}>
    {title}
  </span>
);

export const getButton = ({
  key = undefined,
  target,
  title,
  className,
}: UniversalComponent) => (
  <a
    href={target}
    key={key}
    className={`${className} inline-flex text-sm items-center justify-center p-2 font-mono font-medium text-gray-500 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-150 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
  >
    <span className="w-full">
      {title}
    </span>
  </a>
);

export const getDrawer = ({
  key,
  target,
  title,
  className,
}: UniversalComponent) => (
  <Suspense key={key} fallback="loading...">
    <Sheet>
      <SheetTrigger className={className}>
        {className === 'button' ? getButton({ title, target: '#' }) : title}
      </SheetTrigger>
      <SheetContent>
        <I18nMarkdown className={className} filename={target} />
      </SheetContent>
    </Sheet>
  </Suspense>
);

const getUrl = ({ key, target, title, className }: UniversalComponent) => (
  <a
    key={key}
    href={target}
    className={`${className} text-slate-400 hover:underline`}
  >
    {title}
  </a>
);

export const typesMap = {
  drawer: getDrawer,
  url: getUrl,
  button: getButton,
};
