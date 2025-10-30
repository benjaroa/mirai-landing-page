import { useTranslation } from "react-i18next";
import { useState } from "react";
import partnersImage1 from "@/assets/mirai-partners.jpg";
import teamImage from "@/assets/mirai-team.jpg";
import pajaro3 from "@/assets/pajaro_3.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageMap: Record<string, string> = {
  "mirai-partners.jpg": partnersImage1,
  "mirai-team.jpg": teamImage,
};

export const OurFounders = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Obtener los slides del archivo de traducción
  const slides = t("founders.slides", { returnObjects: true }) as Array<{
    image: string;
    people: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  }>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="md:py-20 py-16 bg-white" id="founders">
      <div className="container">
        <div className="text-left mb-16">
          <div className="flex items-center gap-4 mb-4">
            <img src={pajaro3} alt="" className="w-20 h-20 sm:w-24 sm:h-24" />
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
            {/* Imagen de los fundadores */}
            <div className="w-full min-h-[300px] lg:min-h-[700px]">
              <div className="rounded-lg overflow-hidden shadow-none h-full">
                <img
                  src={imageMap[currentSlideData.image]}
                  alt="Equipo Mirai"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>
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

