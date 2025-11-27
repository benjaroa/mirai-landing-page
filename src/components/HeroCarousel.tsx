import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export const HeroCarousel = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayPlugin] = useState(() => Autoplay({ delay: 5000, stopOnInteraction: true }));

  // Obtener los slides desde las traducciones
  const slides = (t("hero-carousel.slides", { returnObjects: true }) as Array<{
    title: string;
    subtitle?: string;
    ctaText: string;
    ctaUrl: string;
  }>).map((slide, index) => ({
    ...slide,
    image: heroImages[index],
  }));

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="photos-hero" className={`w-full h-screen-mobile relative`}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll: 1, watchDrag: true }}
        orientation="horizontal"
        plugins={[autoplayPlugin]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="p-0">
              <img
                src={slide.image}
                alt="Mirai"
                className="w-screen h-screen-mobile object-cover top-0 select-none"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 pointer-events-auto"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 pointer-events-auto"
          aria-label="Slide siguiente"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </Carousel>

      {/* Indicadores de slide (dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido del slide */}
      <div className="container absolute overflow-hidden inset-0 flex items-end pointer-events-none text-center md:text-left">
        <div className="w-full max-w-3xl pb-48">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 drop-shadow-2xl transition-all duration-500">
            {currentSlideData.title}
          </h1>
          {currentSlideData.subtitle && (
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-lg transition-all duration-500">
              {currentSlideData.subtitle}
            </p>
          )}
            <Button
              asChild
              size="sm"
              variant="link"
              className="pointer-events-auto underline hover:no-underline text-2xl py-6 text-white font-semibold hover:scale-105 transition-all duration-200"
            >
              <a 
                href={currentSlideData.ctaUrl} 
                target={currentSlideData.ctaUrl.startsWith('http') ? '_blank' : '_self'} 
                rel={currentSlideData.ctaUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <ArrowRight className="h-7 w-7 mr-1 text-white" />
                {currentSlideData.ctaText}
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
