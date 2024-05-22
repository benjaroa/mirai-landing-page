import { useTranslation } from "react-i18next";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function HeroSectionCentredWithImage() {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              {t('hero.main-text')}
            </p>
          </div>
          <Separator className="mt-12 mb-12" />
          <Tabs defaultValue="restaurant" className="max-w-2xl text-center mx-auto">
            <TabsList>
              <TabsTrigger className="" value="restaurant">{t('main-description-tabs.titles.restaurant')}</TabsTrigger>
              <TabsTrigger className="text-lg" value="products">{t('main-description-tabs.titles.products')}</TabsTrigger>
              <TabsTrigger className="text-lg" value="pop-ups">{t('main-description-tabs.titles.pop-ups')}</TabsTrigger>
            </TabsList>
            <TabsContent value="restaurant">
              Barra de ramen blablabla...
            </TabsContent>
            <TabsContent value="products">
              Productos...
            </TabsContent>
            <TabsContent value="pop-ups">
              Colaboraciones...
            </TabsContent>
          </Tabs>

        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
