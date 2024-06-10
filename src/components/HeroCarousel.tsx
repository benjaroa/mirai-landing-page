import { TopButtons } from "./TopButtons";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { useTranslation } from "react-i18next";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];


export const HeroCarousel = () => {
  const { t } = useTranslation();

  const imagesComponents = images.map((image) => (
    <img
      src={image}
      alt="Mirai"
      className="w-screen h-screen object-cover opacity-0 top-0"
    />
  ));

  return (
    <section
      id="photos-hero"
      className={`w-full h-screen py-10 px-0`}
    >
      {<img
        src={currentImage}
        alt="Mirai"
        className="w-screen h-screen object-cover opacity-100 top-0"
      />}
      <div className="container">
        {<TopButtons />}
        <div className="bottom-0 flex  space-x-2  justify-end">
          <div className="p-10 rounded-t-xl bg-white text-sm flex justify-end space-x-2">
            <h3 className="font-bold text-4xl">Mirai Food Lab</h3>
            <p className="text-muted-foreground text-xl">
              {t("hero.main-text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
