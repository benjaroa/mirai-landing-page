import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

const routesForSitemap = {
  hostname: "https://www.miraifoodlab.cl",
  langagues: ["es", "en"],
  pages: [
    "menu",
    "shop",
    "location-and-hours",
    "partners",
    "pop-ups-history",
    "pop-ups",
    "stage-and-applications",
  ]
};
const { hostname, langagues, pages } = routesForSitemap;

type SitemapLink = { lang: string; url: string };
type SitemapUrl = {
  url: string;
  changefreq?: string;
  priority?: number;
  links?: SitemapLink[];
};

const writeUrlInSitemap = (
  pages: string[],
  lenguages: string[]
): SitemapUrl[] => {
  return pages.reduce<SitemapUrl[]>(
    (ac, page) => {
      const links = lenguages.reduce<SitemapLink[]>(
        (acc, lang: string) => {
          acc.push({
            lang,
            url: `${hostname}/${lang}/page/${page}/`,
          });
          return acc;
        },
        []
      );
      ac.push({
        url: `es/page/${page}/`,
        links,
        // changefreq: 'daily',
        // priority: 0.3,
      });
      return ac;
    },
    []
  );
};

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

sitemap.write({ url: "/", links: [{ lang: "es", url: `${hostname}/es`}, { lang: "en", url: `${hostname}/en`}] });
writeUrlInSitemap(pages, langagues).forEach((url) => {
  sitemap.write(url);
});

sitemap.end();

// Run the script
// npx tsx scripts/generate-sitemap.ts

/**
 * writes the following
 * <?xml version="1.0" encoding="UTF-8"?>
   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <sitemap>
      <loc>https://example.com/</loc>
   </sitemap>
   <sitemap>
      <loc>https://example.com/2</loc>
   </sitemap>

   const smis = new SitemapIndexStream({level: 'warn'})
   smis.write({url: 'https://example.com/'})
   smis.write({url: 'https://example.com/2'})
   smis.write({
    url: '/docs',
    links: [
      { lang: 'ru', url: 'https://example.ru/docs' },
      { lang: 'en', url: 'https://example.com/docs' },
    ],
  })
   smis.pipe(writestream)
   smis.end()
   */
