import { useTranslation } from "react-i18next";

export const MainContent = () => {
  const { t } = useTranslation();

  type Link = { target: string, icon: string, title: string };
  type Project = { title: string; description: string, links: Link[] }; 

  return (
    <div className="container col-span-2 grid items-start gap-6 lg:col-span-1">

      {(t('projects', { returnObjects: true }) as Project[]).map(({title, description, links}, index: number) => (
        <div key={`project-${index}`} className="border-l-4 border-slate-200 p-4 mb-4">
          <div className="my-3">
            <h3 className="font-semibold text-lg leading-none tracking-tight mb-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div>
            {links.map((link, index) => (
              <a key={`link-${index}`} href={link.target} className="ml-2 text-slate-400 hover:underline">
                [{link.title}]
              </a>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}