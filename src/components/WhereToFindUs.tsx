import { Button } from "./ui/button";
import { MapPin, Utensils, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import miraiMutImage from "@/assets/mirai-mut.jpg";
import miraiFranklinImage from "@/assets/mirai-franklin.jpg";

interface Restaurant {
  name: string;
  address: string;
  menuUrl: string;
  mapsUrl: string;
  backgroundImage: string;
  infoUrl: string;
}

export const WhereToFindUs = () => {
  const { t, i18n } = useTranslation();

  const restaurants: Restaurant[] = [
    {
      name: "MUT",
      address: i18n.language === 'es' 
        ? "Av. Apoquindo 2730, piso -2, Las Condes, Santiago" 
        : "Av. Apoquindo 2730, piso -2, Las Condes, Santiago",
      menuUrl: "https://gour.media/mirai-mut",
      mapsUrl: "https://maps.app.goo.gl/bpBxyUa9WmR3U5Kq9",
      backgroundImage: miraiMutImage,
      infoUrl: `/${i18n.language}/page/location-and-hours`
    },
    {
      name: "FRANKLIN",
      address: i18n.language === 'es'
        ? "Franklin 741, local B20, Santiago Centro, Santiago"
        : "Franklin 741, local B20, Santiago Centro, Santiago",
      menuUrl: "https://drive.google.com/file/d/1xlA85COECUPE-Mn1CT6e1bwflz1b250w/view",
      mapsUrl: "https://maps.app.goo.gl/xUKMGmqvSDAqwB4Q6",
      backgroundImage: miraiFranklinImage,
      infoUrl: `/${i18n.language}/page/location-and-hours`
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="locations">
      <div className="container">
        <div className="text-left mb-16">
          <h2 className="sm:text-5xl text-4xl font-bold mb-4">
            {t("where-to-find-us.title")}
            <span className="text-mirai">{t("where-to-find-us.title-highlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl">
            {t("where-to-find-us.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage: `url(${restaurant.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay oscuro para mejor legibilidad */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2 text-white">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center justify-center text-white/90 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-sm">{restaurant.address}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center border-t border-white/40 pt-4 justify-between">
                  <div className="flex sm:flex-row gap-3 justify-center">
                  <Button
                        asChild
                        variant="link"
                        className="flex items-center justify-center bg-transparent border-white hover:text-white text-white underline hover:no-underline"
                    >
                        <a 
                        href={restaurant.infoUrl}
                        rel="noopener noreferrer"
                        >
                        <Info className="h-4 w-4 mr-2" />
                        {t("where-to-find-us.info")}
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="flex items-center justify-center bg-transparent border-white hover:text-white text-white underline hover:no-underline"
                    >
                        <a 
                        href={restaurant.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Utensils className="h-4 w-4 mr-2" />
                        {t("where-to-find-us.menu")}
                        </a>
                    </Button>
                  </div>
                  
                  <Button
                    asChild
                    className="flex items-center justify-center bg-white hover:bg-mirai text-mirai hover:text-white"
                  >
                    <a 
                      href={restaurant.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {t("where-to-find-us.directions")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
