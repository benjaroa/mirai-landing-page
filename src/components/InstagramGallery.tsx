export const InstagramGallery = () => {
  const images = [
    { src: "./assets/ig-1.jpg", url: "https://www.instagram.com/p/C713lYZpmJA/", },
    { src: "./assets/ig-2.jpg", url: "https://www.instagram.com/p/C7H_Fq2xRgk/", },
    { src: "./assets/ig-3.jpg", url: "https://www.instagram.com/p/C7H_Fq2xRgk/", },
    { src: "./assets/ig-4.jpg", url: "https://www.instagram.com/p/C6KCFPpx0w_/", },
    { src: "./assets/ig-5.jpg", url: "https://www.instagram.com/p/C5WczxUxa2g/", },
    { src: "./assets/ig-6.jpg", url: "https://www.instagram.com/p/C071je0uFm8/", },
    { src: "./assets/ig-7.jpg", url: "https://www.instagram.com/p/C05Q05vrbYN/", },
    { src: "./assets/ig-8.jpg", url: "https://www.instagram.com/p/C1a9-BoISVr/", },
    { src: "./assets/ig-9.jpg", url: "https://www.instagram.com/p/C5mVDEZxz3L/", },
    { src: "./assets/ig-10.jpg", url: "https://www.instagram.com/p/C7ASu9yxNFg/", },
  ];
  return (
    <div className="p-5 sm:p-8 my-10">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-5 md:columns-4 lg:columns-6 [&>img:not(:first-child)]:mt-8">
        {images.map(({ src, url }, index) => (
          <a target="_blank" href={url} key={index} className="">
            <img className="h-auto max-w-full rounded-lg mb-4" src={src} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};
