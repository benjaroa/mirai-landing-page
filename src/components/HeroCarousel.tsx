import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const imagesComponents = images.map((imageSrc, index) => (
  <CarouselItem key={index} className="p-0">
    <img
      src={imageSrc}
      alt="Mirai"
      className="w-screen h-screen object-cover top-0"
    />
  </CarouselItem>
));


export const HeroCarousel = () => {
  return (
    <section
      id="photos-hero"
      className={`w-full h-screen`}
    >
      <Carousel
        opts={{ align: "start", loop: true, slidesToScroll: 1, watchDrag: false }}
        orientation="horizontal"
        plugins={[ Autoplay({ delay: 3000 })] }
        >
        <CarouselContent>
          {imagesComponents}
        </CarouselContent>
      </Carousel>
      <div className="container">
        <div className="absolute bottom-0 py-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold text-white">
            MIRAI <br />FOOD LAB
          </h1>
        </div>
      </div>
    </section>
  );
};
