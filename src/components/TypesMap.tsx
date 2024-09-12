import { Button } from "./ui/button";
import { Link } from "wouter";

type LinkType = {
  target?: string;
  className?: string;
  icon: string;
  title: string;
  metadata?: Record<string, unknown>;
};

export type Project = {
  title: string;
  description: string;
  links: LinkType[];
  "img-scr": string;
};

const getButton = (title: string, className?: string, metadata?: Record<string, unknown>) => (
  <Button variant="outline" className={`${className}`} {...metadata}>
    {title}
  </Button>
);

export const processLinks = (links: LinkType[], language = 'es') => {
  return links.map(({ target, title, className, metadata }, key) => {
    return (
      <span className="inline-block pr-3 py-1 mb-1" key={`span-${key}`}>
        {!target && getButton(title, className, metadata)}
        {target && (
          <Link to={`${language}/page/${target}`}>
            {getButton(title, className, metadata)}
          </Link>
        )}
      </span>
    );
  });
};
