import heroImage1 from "@/assets/hero/hero-1.jpg";
import heroImage2 from "@/assets/hero/hero-2.jpg";
import heroImage3 from "@/assets/hero/hero-3.jpg";
import heroImage4 from "@/assets/hero/hero-4.jpg";
import { useEffect, useState } from "react";
const images = [heroImage1, heroImage2, heroImage3, heroImage4];

const getRandom = () => Math.floor(Math.random() * images.length)

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(images[getRandom()]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[getRandom()]);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="w-full h-screen container grid place-items-center py-20 md:py-32 gap-10 ">
      <img
        src={currentImage}
        alt="Mirai"
        className="w-screen h-screen object-cover object-middle-top opacity-100 absolute top-0 -z-10"
      />
    </section>
  );
};
