import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PromoBanner = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-mirai-dark text-white text-[10px] sm:text-sm py-2 px-4 text-center text-sm font-medium fixed w-full z-50">
      <div className="container flex items-center justify-center">
        <span>
          {t("navbar.promo-banner.text")}{' '}
          <a 
            href="https://tienda.miraifoodlab.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center ml-2 text-white transition-colors underline hover:no-underline font-semibold"
          >
            {t("navbar.promo-banner.button")}
            <ArrowRight className="h-3 w-3 ml-1" />
          </a>
        </span>
      </div>
    </div>
  );
};
