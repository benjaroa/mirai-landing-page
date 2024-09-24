import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const images = [
  { src: "./assets/ig-1.jpg", url: "https://www.instagram.com/p/C713lYZpmJA/" },
  { src: "./assets/ig-2.jpg", url: "https://www.instagram.com/p/C7H_Fq2xRgk/" },
  { src: "./assets/ig-3.jpg", url: "https://www.instagram.com/p/C7H_Fq2xRgk/" },
  { src: "./assets/ig-4.jpg", url: "https://www.instagram.com/p/C6KCFPpx0w_/" },
  { src: "./assets/ig-5.jpg", url: "https://www.instagram.com/p/C5WczxUxa2g/" },
  { src: "./assets/ig-6.jpg", url: "https://www.instagram.com/p/C071je0uFm8/" },
  { src: "./assets/ig-7.jpg", url: "https://www.instagram.com/p/C05Q05vrbYN/" },
  { src: "./assets/ig-8.jpg", url: "https://www.instagram.com/p/C1a9-BoISVr/" },
  { src: "./assets/ig-9.jpg", url: "https://www.instagram.com/p/C5mVDEZxz3L/" },
  { src: "./assets/ig-10.jpg", url: "https://www.instagram.com/p/C7ASu9yxNFg/" },
  { src: "./assets/ig-11.jpg", url: "https://www.instagram.com/p/CzfLYfLO8Sm/" },
  { src: "./assets/ig-12.jpg", url: "https://www.instagram.com/p/CyZZ0fXRNNx/" },
  { src: "./assets/ig-13.jpg", url: "https://www.instagram.com/p/CwMBkeMrFKz/" },
  { src: "./assets/ig-14.jpg", url: "https://www.instagram.com/p/CvutxnLuBk6/" },
  { src: "./assets/ig-15.jpg", url: "https://www.instagram.com/p/C5UIM73xQt9/" },
  { src: "./assets/ig-16.jpg", url: "https://www.instagram.com/p/B-x4HQwnkq8/" }
];

export const InstagramGallery = () => {
  return (
    <div className="p-5 sm:p-8 my-10">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-5 md:columns-4 lg:columns-6 [&>img:not(:first-child)]:mt-8">
        {images.map(({ src, url }, index) => (
          <a target="_blank" href={url} key={index} className="">
            <img
              className="h-auto max-w-full rounded-lg mb-4"
              src={src}
              alt=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export const IntagramCarrousel = () => {
  return (
    <div className="p-4 my-8">
      <Carousel
        opts={{ align: "start", loop: true, slidesToScroll: 1 }}
        orientation="horizontal"
        plugins={[ Autoplay({ delay: 2000 })] }
        >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map(({ src, url }, index) => (
            <CarouselItem key={index} className="pl-1 basis-6/12 sm:basis-5/12 md:basis-4/12 lg:basis-3/12 xl:basis-2/12 2xl:basis-1/12 opacity-65 transition-opacity hover:opacity-100">
              <a target="_blank" href={url} className="flex aspect-square items-center p-6">
                <img
                  className="h-auto max-w-full rounded-lg mb-4"
                  src={src}
                  alt="Visita nuestro Instagram"
                />
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
