import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ShoppingCart, ArrowRight } from "lucide-react";
import illustrationKombucha from "@/assets/illustration-kombucha.jpg";
import illustrationRamen from "@/assets/illustration-ramen.jpg";
import illustrationMerch from "@/assets/illustration-mirai.jpg";

interface Category {
  id: string;
  name: string;
  description: string;
  link: string;
  backgroundImage: string;
}

export const ShopCategories = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories: Category[] = [
    {
      id: "kombuchas",
      name: t("shop-categories.kombuchas.title"),
      description: t("shop-categories.kombuchas.description"),
      link: "https://tienda.miraifoodlab.cl/collection/kombuchas",
      backgroundImage: illustrationKombucha
    },
    {
      id: "de-la-casa",
      name: t("shop-categories.de-la-casa.title"),
      description: t("shop-categories.de-la-casa.description"),
      link: "https://tienda.miraifoodlab.cl/collection/Compra-uno-a-uno",
      backgroundImage: illustrationRamen
    },
    {
      id: "merch",
      name: t("shop-categories.merch.title"),
      description: t("shop-categories.merch.description"),
      link: "https://tienda.miraifoodlab.cl/collection/merch",
      backgroundImage: illustrationMerch
    }
  ];

  const currentCategory = categories[selectedCategory];

  return (
    <section className="pt-10 pb-20 bg-gray-50">
      <div className="container">
        <div className="text-left mb-16">
          <h2 className="sm:text-5xl text-4xl font-bold mb-4">
            {t("shop-categories.main-title")}
            <span className="text-mirai">{t("shop-categories.main-title-highlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl">
            {t("shop-categories.main-description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          {/* Card solo para el selector de categorías - con rotación */}
          <Card className="w-full md:w-1/4 bg-[#f7f0f1] shadow-none border-none md:rotate-[-2deg] md:z-10 transition-transform duration-300">
            <div className="p-6 md:p-8">
              <div className="space-y-3 md:space-y-4 flex flex-col items-start">
                {categories.map((category, index) => (
                  <Button
                    key={category.id}
                    variant="link"
                    onClick={() => setSelectedCategory(index)}
                    className={`text-left px-4 md:px-6 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === index
                        ? 'text-mirai underline transform scale-105'
                        : 'text-mirai-light hover:underline'
                    }`}
                  >
                    {selectedCategory === index && (
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                    )}
                    <h3 className="text-lg md:text-xl font-bold">{category.name}</h3>
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Contenido fuera de la card - superpuesto ligeramente */}
          <div className="flex-1 bg-white rounded-lg p-6 md:-ml-8 border border-mirai border-dashed border-2 md:rotate-[1deg] transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              {/* Ilustración - grande pero completa */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img 
                  src={currentCategory.backgroundImage}
                  alt={currentCategory.name}
                  className="h-auto w-full max-h-[250px] md:max-h-[350px] object-contain transition-all duration-500"
                />
              </div>
              
              {/* Texto informativo */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {currentCategory.name}
                </h3>
                <p className="text-lg md:text-xl text-gray-700">
                  {currentCategory.description}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-mirai hover:bg-mirai/90 text-white"
                >
                  <a 
                    href={currentCategory.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {t("shop-categories.cta-button")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

