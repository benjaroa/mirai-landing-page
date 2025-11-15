import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import pajaro1 from "@/assets/pajaro_1.svg";

interface CollaborationLink {
  label: string;
  url: string;
}

interface CollaborationItem {
  date: string;
  title: string;
  image: string;
  description: string;
  links: CollaborationLink[];
}

export const Collaborations = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Obtener los datos desde las traducciones
  const title = t("collaborations.title");
  const titleHighlight = t("collaborations.title-highlight");
  const description = t("collaborations.description");
  const items = t("collaborations.items", {
    returnObjects: true,
  }) as CollaborationItem[];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="collaborations" className="py-20">
      <div className="container text-left mb-12 flex flex-col items-start justify-start">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src={pajaro1} alt="" className="w-20 h-20 sm:w-24 sm:h-24" />
          <h2 className="sm:text-5xl text-4xl font-bold">
            {title}
            <span className="text-mirai">
              {titleHighlight}
            </span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>

      <div className="relative container">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="overflow-hidden h-full shadow-none border-2 border-mirai-dark transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="px-6 py-4 flex flex-col gap-4 bg-mirai-dark min-h-[230px]">
                      <div>
                        <div className="flex flex-col items-start justify-between gap-2">
                            <Badge className=" bg-white hover:bg-white text-foreground text-[10px] rounded-full shadow-none">
                                {item.date}
                            </Badge>
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        </div>
                        <p className="text-sm text-white/80 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      {item.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.links.map((link, linkIndex) => (
                            <Button
                              key={linkIndex}
                              variant="outline"
                              size="sm"
                              asChild
                              className="text-xs bg-transparent hover:bg-white text-white hover:text-mirai border-white border-2 shadow-none"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                {link.label}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          Colaboración {current} de {count}
        </div>
      </div>
    </section>
  );
};

