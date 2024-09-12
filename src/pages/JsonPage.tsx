import { ScrollArea } from "../components/ui/scroll-area";
import { I18nMarkdown } from "../components/I18nMarkdown";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
const currentImage = images[getRandomIndex(0, images.length)];

const goBack = () => {
  return window.history.back();
};

export const JsonPage = ({ target }: { target: string }) => {
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
        <div className="mx-auto sm:py-8 flex w-full flex-col justify-center">
          <div className="container mb-4 flex flex-row-reverse">
            <a
              href="#"
              onClick={goBack}
              className="bg-mirai text-white rounded-lg mb-6 p-4inline-flex items-center px-5 py-2.5 text-sm font-medium text-center hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              volver 👉
            </a>
          </div>
          <div className="container prose">
            <I18nMarkdown filename={target} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
