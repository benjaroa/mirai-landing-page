import { ScrollArea } from "../components/ui/scroll-area";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { CustomCardType } from "./Card";
import jsonPartnersList from "../assets/partners.json";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FilterAutocomplete } from "@/components/FilterAutocomplete";
import { PartnersMap } from "@/components/PartnersMap";
import { MapPin, Instagram, Link as LinkIcon, Eye, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
const currentImage = images[getRandomIndex(0, images.length)];

const goBack = () => {
  return window.history.back();
};

const partnersListParsed = jsonPartnersList.reduce(
  (
    acc: CustomCardType[],
    { name, instagram, website, district, address, labels, lat, lng }
  ) => {
    const partner: CustomCardType = {};
    if (name) partner.name = name;
    if (instagram) partner.instagram = instagram;
    if (website) partner.website = website;
    if (district) partner.district = district;
    if (address) partner.address = address;
    if (labels) partner.labels = labels.split(", ");
    if (lat) partner.lat = lat;
    if (lng) partner.lng = lng;
    return [...acc, partner];
  },
  []
);

const filterOptions = {
  districts: [
    ...new Set(
      (partnersListParsed as CustomCardType[]).reduce<string[]>(
        (acc, { district }) => {
          if (!district) return acc;
          return [...acc, district];
        },
        []
      )
    ),
  ],
  labels: [
    ...new Set(
      (partnersListParsed as CustomCardType[]).reduce<string[]>(
        (acc, { labels }) => {
          if (!labels) return acc;
          return [...acc, ...labels];
        },
        []
      )
    ),
  ],
};


export const Partners = () => {
  const { t } = useTranslation();
  const [districtFilter, setDistrictFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [showMap, setShowMap] = useState<boolean>(true);

  const filteredPartnersList = partnersListParsed.filter(
    ({ district, labels }) => {
      if (
        districtFilter.length &&
        district &&
        !districtFilter.includes(district)
      ) {
        return false;
      }
      if (
        typeFilter.length &&
        labels &&
        !labels.some((label) => typeFilter.includes(label))
      ) {
        return false;
      }
      return true;
    }
  );

  return (
    <div className="container p-0 relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
        <img
          src={currentImage}
          alt="Mirai"
          className="w-screen h-screen object-cover top-0"
        />
      </div>
      <ScrollArea className="py-2 lg:py-4 h-full">
        <div className="mx-auto sm:py-8 flex w-full h-full flex-col justify-center mb-4">
          <div className="container mb-6 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-1 w-12 bg-mirai rounded-full"></div>
                <div className="flex items-center justify-between gap-3 w-full">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 uppercase mb-0">
                    {t("partners.title")}
                  </h1>
                  <Button
                    variant="link"
                    onClick={goBack}
                    className="underline hover:no-underline text-mirai"
                  >
                    {t("back-button-label")}
                  </Button>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {t("partners.description")}
              </p>
            </div>
          </div>
          <div className="container prose max-w-none">
            <Card className="mb-6 shadow-none border-gray-200 z-[9999] relative">
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                <FilterAutocomplete
                  options={filterOptions.districts}
                  value={districtFilter}
                  onChange={setDistrictFilter}
                  placeholder={t("partners.filter.placeholders.district")}
                  title={t("partners.filter.keys.district")}
                />
                <FilterAutocomplete
                  options={filterOptions.labels}
                  value={typeFilter}
                  onChange={setTypeFilter}
                  placeholder={t("partners.filter.placeholders.type")}
                  title={t("partners.filter.keys.type")}
                />
              </CardContent>
              <CardFooter className="h-10 text-sm justify-between items-center">
                <p className="text-gray-700">
                  <span className="font-semibold text-mirai">{filteredPartnersList.length}</span> {t("partners.filter.footer.of")} <span className="font-semibold">{partnersListParsed.length}</span> {t("partners.filter.footer.partners")}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMap(!showMap)}
                  className="h-8 text-xs text-gray-600 hover:text-mirai"
                >
                  {showMap ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5 mr-1.5" />
                      Ocultar mapa
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      Mostrar mapa
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            {showMap && <PartnersMap partners={filteredPartnersList} />}
            
            {/* Listado completo de locales */}
            <div className="mt-6">
              <div className="mb-4">
                <h2 className="text-sm sm:text-lg font-bold text-gray-900 mb-1">
                  {t("partners.filter.footer.showing")} {filteredPartnersList.length} {t("partners.filter.footer.partners")}
                </h2>
              </div>
              
              {filteredPartnersList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {filteredPartnersList.map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="group border border-gray-200/60 rounded-lg p-3 bg-white/50 hover:bg-white hover:border-mirai/30 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 flex-1">
                          {partner.name}
                        </h3>
                        {partner.labels && partner.labels.length > 0 && (
                          <Badge 
                            variant="outline" 
                            className="text-xs px-1.5 py-0 h-5 flex-shrink-0 border-gray-300 text-gray-600 bg-transparent"
                          >
                            {partner.labels[0]}
                          </Badge>
                        )}
                      </div>
                      
                      {partner.district && (
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                          <MapPin className="h-3 w-3 text-mirai flex-shrink-0" />
                          <span className="line-clamp-1">{partner.district}</span>
                        </div>
                      )}
                      
                      {partner.address && (
                        <p className="text-xs text-gray-500 line-clamp-1 mb-2">
                          {partner.address}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100/50">
                        {partner.instagram && (
                          <a
                            href={`https://instagram.com/${partner.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-mirai transition-colors"
                            title={`@${partner.instagram}`}
                          >
                            <Instagram className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-mirai transition-colors"
                            title={partner.website}
                          >
                            <LinkIcon className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {partner.address && (
                          <a
                            href={`https://www.google.com/maps?q=${encodeURIComponent(partner.address + (partner.district ? `, ${partner.district}` : ''))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-mirai transition-colors ml-auto"
                            title="Ver en mapa"
                          >
                            <MapPin className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {t("partners.no-results")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
