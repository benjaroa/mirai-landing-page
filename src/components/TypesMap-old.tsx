import { Suspense } from "react";
import { I18nMarkdown } from "./I18nMarkdown";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { X } from "lucide-react"

export type UniversalComponent = {
  target: string;
  key?: number;
  title?: string;
  className?: string;
  metadata?: Record<string, unknown>;
};

type ComponentType = "drawer" | "url" | "button";

type Link = {
  target: string;
  className?: string;
  icon: string;
  title: string;
  type: ComponentType;
  metadata?: Record<string, unknown>;
};

export type Project = {
  title: string;
  description: string;
  links: Link[];
  "img-scr": string;
};

export const getFallback = ({ key, title, className, metadata }: UniversalComponent) => (
  <span key={key} className={className} {...metadata}>
    {title}
  </span>
);

export const getButton = ({
  key = undefined,
  target,
  title,
  className,
  metadata,
}: UniversalComponent) => (
  <Button variant="outline" key={key} className={`${className}`} {...metadata}>
    <a href={target}>
      <span className="w-full">{title}</span>
    </a>
  </Button>
);
// <a
//   href={target}
//   key={key}
//   className={`${className} inline-flex text-sm items-center justify-center p-2 font-mono font-medium text-gray-500 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-150 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
// >
//   <span className="w-full">{title}</span>
// </a>

export const getDrawer = (
  { key, target, title, className, metadata }: UniversalComponent,
  isDesktop: boolean
) => {
  // if (isDesktop) {
  return (
    <Suspense key={key} fallback="loading...">
      <Dialog modal={true}>
        <DialogTrigger asChild>
          {className === "button" ?<Button variant="outline">{title}</Button>:<button>{title}</button>}
        </DialogTrigger>
        <DialogContent className="max-w-screen h-screen">
          <ScrollArea>
            <div className="container prose">
          <DialogClose asChild>
            {isDesktop && <Button className="float-right" type="button" variant="secondary" {...metadata}>
            <X />
            </Button>}
          </DialogClose>
              <I18nMarkdown className={className} filename={target} />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Suspense>
  );
  // }
  // return (
  //   <Suspense key={key} fallback="loading...">
  //     <Sheet>
  //       <SheetTrigger className={className}>
  //         {className === "button" ? getButton({ title }) : title}
  //       </SheetTrigger>
  //       <SheetContent>
  //         <ScrollArea className="h-screen prose dark:prose-invert py-8">
  //           <I18nMarkdown className={className} filename={target} />
  //         </ScrollArea>
  //       </SheetContent>
  //     </Sheet>
  //   </Suspense>
  // );
};

const getUrl = ({ key, target, title, className, metadata }: UniversalComponent) => (
  <a
    key={key}
    href={target}
    className={`${className} text-slate-400 hover:underline`}
    {...metadata}
  >
    {title}
  </a>
);

export const typesMap = {
  drawer: getDrawer,
  url: getUrl,
  button: getButton,
};

export const processLinks = (links: Link[], isDesktop = false) => {
  return links.map(({ target, title, type, className, metadata }, key) => {
    const component = typesMap[type] || getFallback;
    return (
      <span className="inline-block pr-3 py-1 mb-1" key={`span-${key}`}>
        {component({ key, target, title, className, metadata }, isDesktop)}
      </span>
    );
  });
};