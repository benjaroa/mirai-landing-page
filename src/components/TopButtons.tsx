import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { TikTokIcon } from "./TikTokIcon";
import { ModeButton } from "./ModeButton";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoI from "@/assets/mirai-i-v2.png";
import { PromoBanner } from "./PromoBanner";

type TopButtonsProps = {
  activateDarkMode?: boolean;
  showTopAlertMessage?: boolean;
};

export const TopButtons = ({
  activateDarkMode,
  showTopAlertMessage,
}: TopButtonsProps) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLanguageDropdownOpen]);
  return (
    <>
      <PromoBanner />
      <div className={`z-40 fixed w-full top-[45px] sm:top-[35px] border-b-[0.1px] border-gray-200/50   ${
        isScrolled 
          ? 'bg-white' 
          : 'bg-transparent'
      }`}>
      <header className="container">
        <div className="flex justify-between items-center space-x-2 py-0">
          {/* Logo */}
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex items-center"
          >
            <img
              src={logoI}
              className={`w-24 py-4 object-contain   ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              alt="Mirai Food Lab Logo"
            />
          </a>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-1">
            {/* Shop CTA Button - Hidden on mobile */}
            <a 
              href="https://tienda.miraifoodlab.cl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button 
                size="lg"
                variant="link"
                className={`  underline hover:no-underline ${
                  isScrolled ? 'text-mirai' : 'text-white'
                }`}
              >
                <ArrowRight className="h-4 w-4 mr-1" />
                {i18n.language === 'es' ? 'COMPRA NUESTROS PRODUCTOS' : 'BUY OUR PRODUCTS'}
              </Button>
            </a>
            
            <a target="_blank" href="https://instagram.com/miraifoodlab" className="flex items-center justify-center">
              <Button variant="ghost" size="icon" className={`ml-auto h-7 w-7   ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}>
                <InstagramLogoIcon className={`h-7 w-7   ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`} />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@miraifoodlab" className="flex items-center justify-center">
              <Button variant="ghost" size="icon" className={`ml-auto h-7 w-7   ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}>
                <span className="h-7 w-7">
                  <TikTokIcon className={`  ${isScrolled ? 'fill-gray-700' : 'fill-white'}`} />
                </span>
                <span className="sr-only">TikTok</span>
              </Button>
            </a>
            {activateDarkMode && <ModeButton />}
            
            {/* Custom Language Dropdown */}
            <div className="relative language-dropdown">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className={`w-[50px] h-7   ${
                  isScrolled 
                    ? 'bg-white border-gray-300 text-black hover:bg-gray-50' 
                    : 'bg-transparent border-white/30 text-white hover:text-white hover:border-white/60 hover:bg-white/20'
                }`}
              >
                {i18n.language.toUpperCase()}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-[50px] bg-white border border-gray-300 rounded-md shadow-lg z-[9999]">
                  <button
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                      i18n.language === 'es' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    onClick={() => {
                      i18n.changeLanguage('es');
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    ES
                  </button>
                  <button
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 ${
                      i18n.language === 'en' ? 'bg-gray-100 font-medium' : ''
                    }`}
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {showTopAlertMessage && (
        <div className="bg-mirai text-white">
          <div className="container py-4 text-right">
            {t("navbar.alert-bar.text")} <a href={t("navbar.alert-bar.link")}>
              <Button variant="secondary" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      )}
      </div>
      
      {/* Mobile Shop CTA Button - Below navbar */}
      <div className={`fixed top-[100px] sm:hidden w-full z-30 px-4 pt-2 pb-1 border-b border-gray-200/50  ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <a 
          href="https://tienda.miraifoodlab.cl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            size="lg"
            variant="link"
            className={`w-full underline hover:no-underline ${
              isScrolled ? 'text-mirai' : 'text-white'
            }`}
          >
            <ArrowRight className="h-4 w-4 mr-1" />
            {i18n.language === 'es' ? 'COMPRA NUESTROS PRODUCTOS' : 'BUY OUR PRODUCTS'}
          </Button>
        </a>
      </div>
    </>
  );
};
