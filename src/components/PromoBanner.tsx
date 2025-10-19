import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PromoBanner = () => {
  const { i18n } = useTranslation();
  
  return (
    <div className="bg-orange-950 text-white text-[8pt] py-2 px-4 text-center text-sm font-medium fixed w-full z-50">
      <div className="container flex items-center justify-center">
        <span>
          {i18n.language === 'es' 
            ? '¡Visita nuestra tienda y recibe nuestros productos directo a tu casa! ' 
            : 'Visit our store and receive our products directly at your home! '
          }
          <a 
            href="https://tienda.miraifoodlab.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center ml-2 text-white transition-colors underline hover:no-underline font-semibold"
          >
            {i18n.language === 'es' ? 'Comprar ahora' : 'Buy now'}
            <ArrowRight className="h-3 w-3 ml-1" />
          </a>
        </span>
      </div>
    </div>
  );
};
