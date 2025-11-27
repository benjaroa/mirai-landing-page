import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import partnersImage1 from "@/assets/mirai-partners.jpg";
import teamImage from "@/assets/mirai-team.jpg";
import teamImage1 from "@/assets/team-1.jpg";
import teamImage2 from "@/assets/team-2.jpg";
import teamImage3 from "@/assets/team-3.jpg";
import teamImage4 from "@/assets/team-4.jpg";
import teamImage5 from "@/assets/team-5.jpg";
import misha_ignacio_1 from "@/assets/misha_ignacio_1.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageMap: Record<string, string> = {
  "mirai-partners.jpg": partnersImage1,
  "mirai-team.jpg": teamImage,
  "team-1.jpg": teamImage1,
  "team-2.jpg": teamImage2,
  "team-3.jpg": teamImage3,
  "team-4.jpg": teamImage4,
  "team-5.jpg": teamImage5,
};

export const OurFounders = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Obtener los slides del archivo de traducción
  const slides = t("founders.slides", { returnObjects: true }) as Array<{
    image: string;
    images?: string[];
    people: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  }>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setCurrentImageIndex(0); // Reset al cambiar de slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setCurrentImageIndex(0); // Reset al cambiar de slide
  };

  const currentSlideData = slides[currentSlide];
  const hasMultipleImages = currentSlideData.images && currentSlideData.images.length > 1;

  // Carrusel automático de imágenes para slides con múltiples imágenes
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentSlideData.images!.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [currentSlide, hasMultipleImages, currentSlideData.images]);

  const getCurrentImage = () => {
    if (hasMultipleImages) {
      return imageMap[currentSlideData.images![currentImageIndex]];
    }
    return imageMap[currentSlideData.image];
  };

  return (
    <section className="md:py-20 py-16 bg-white" id="founders">
      <div className="container">
        <div className="text-left mb-16">
          <div className="flex items-center gap-4 mb-4">
            <img src={misha_ignacio_1} alt="" className="w-20 h-20 sm:w-24 sm:h-24" />
            <h2 className="sm:text-5xl text-4xl font-bold mb-4">
              {t("founders.title")}
              <span className="text-mirai">{t("founders.title-highlight")}</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl">
            {t("founders.description")}
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-2 items-stretch">
            {/* Imagen de los fundadores / equipo */}
            <div className="w-full min-h-[300px] lg:min-h-[700px] relative">
              <div className="rounded-lg overflow-hidden shadow-none h-full">
                <img
                  src={getCurrentImage()}
                  alt="Equipo Mirai"
                  className="w-full h-full object-cover transition-opacity duration-1000"
                  style={{ objectPosition: '50% 40%' }}
                  key={hasMultipleImages ? currentImageIndex : currentSlide}
                />
              </div>
              
              {/* Indicadores de imagen para el carrusel interno */}
              {hasMultipleImages && (
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {currentSlideData.images!.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Ver foto ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Biografías */}
            <div className="bg-mirai-dark rounded-lg p-8 lg:p-10 flex flex-col justify-between relative">
              <div className="space-y-8">
                {currentSlideData.people.map((person, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {person.name}
                    </h3>
                    <p className="text-lg font-semibold text-white mb-4">
                      {person.role}
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      {person.bio}
                    </p>
                    
                    {/* Separador entre personas, excepto después de la última */}
                    {index < currentSlideData.people.length - 1 && (
                      <div className="border-t border-white/40 my-6"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-8">
                {/* Indicadores de slide (dots) */}
                {slides.length > 1 && (
                  <div className="flex justify-center gap-2 flex-1">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide
                            ? "bg-white w-8"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Ir al slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Controles de navegación en la esquina inferior derecha */}
                {slides.length > 1 && (
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-mirai-dark transition-all duration-200"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="border-2 border-white text-white p-2 rounded-full hover:bg-white hover:text-mirai-dark transition-all duration-200"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


