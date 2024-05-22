import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const MainContent = () => {
  const { t } = useTranslation();

  type ProjectDictionary = Record<string, { title: string; description: string }>;
  const restaurant = t("projects.restaurant", { returnObjects: true }) as ProjectDictionary;
  const products = t("projects.products", { returnObjects: true }) as ProjectDictionary;
  const popUps = t("projects.pop-ups", { returnObjects: true }) as ProjectDictionary;

  return (
    <div className="container col-span-2 grid items-start gap-6 lg:col-span-1">

      <Card>
        <CardHeader>
          <CardTitle>
            {restaurant.title as unknown as string}
          </CardTitle>
          <CardDescription>
            {restaurant.description as unknown as string}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          [ubicación] [carta] [reservas] [contacto] [google maps]
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {products.title as unknown as string}
          </CardTitle>
          <CardDescription>
            {products.description as unknown as string}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          [tienda] [dónde encontrarlos] [mayoristas] [contacto]
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {popUps.title as unknown as string}
          </CardTitle>
          <CardDescription>
            {popUps.description as unknown as string}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          [agenda] [quiero colaborar] [proximamente] [contacto]
        </CardContent>
      </Card>

    </div>
  );
}