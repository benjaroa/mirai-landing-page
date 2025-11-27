import { ScrollArea } from "../components/ui/scroll-area";
import { I18nMarkdown } from "../components/I18nMarkdown";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import miraiMutImage from "@/assets/mirai-mut.jpg";
import miraiFranklinImage from "@/assets/mirai-franklin.jpg";
import partnersImage from "@/assets/mirai-partners-2.jpg";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const locationImages: Record<string, string> = {
  'mut': miraiMutImage,
  'franklin': miraiFranklinImage,
  'partners': partnersImage
};

const locationTitles: Record<string, string> = {
  'franklin': 'Factoría Franklin',
  'mut': 'MUT'
};

const goBack = () => {
  return window.history.back();
};

export const JsonPage = ({ target }: { target: string }) => {
  const { t } = useTranslation();
  
  // Get location parameter from URL
  const params = new URLSearchParams(window.location.search);
  const location = params.get('location') || undefined;

  // Get the appropriate image based on location parameter
  const displayImage = location && locationImages[location.toLowerCase()] 
    ? locationImages[location.toLowerCase()] 
    : images[getRandomIndex(0, images.length)];

  // Get page title based on location parameter
  const pageTitle = location && locationTitles[location.toLowerCase()]
    ? locationTitles[location.toLowerCase()]
    : t(`pages.${target}`);

  return (
    <div className="container p-0 relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
        <img
          src={displayImage}
          alt="Mirai"
          className="w-screen h-screen object-cover top-0"
        />
      </div>
      <ScrollArea className="py-2 lg:py-4 h-full">
        <div className="mx-auto sm:py-8 flex w-full h-full flex-col justify-center mb-4">
          <div className="container mb-6 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-3 w-full">
                <div className="h-1 w-12 bg-mirai rounded-full"></div>
                <div className="flex items-center justify-between gap-3 w-full">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 uppercase mb-0">
                    {pageTitle}
                  </h1>
                </div>
              </div>
            </div>
                  <Button
                    variant="link"
                    onClick={goBack}
                    className="underline hover:no-underline text-mirai"
                  >
                    {t("back-button-label")}
                  </Button>
          </div>
          <div className="container prose max-w-none">
            <I18nMarkdown filename={target} section={location} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
