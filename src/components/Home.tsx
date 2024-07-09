import "../App.css";
import { MainContent } from "./MainContent.tsx";
import { NewFooter } from "./NewFooter.tsx";
import { IntagramCarrousel } from "./InstagramGallery.tsx";
import { HeroCarousel } from "./HeroCarousel.tsx";
import { DescriptionCard } from './DescriptionCard.tsx';
import { TopButtons } from "./TopButtons.tsx";
import { ScrollToTop } from './ScrollToTop.tsx';

const Home = () => {

  return (
    <main className="">
      <TopButtons activateDarkMode={false} />
      <HeroCarousel />
      <div className="my-20" />
      <DescriptionCard />
      <div className="my-20" />
      <MainContent />
      <div className="my-20" />
      <IntagramCarrousel />
      <div className="my-20" />
      <NewFooter />
      <ScrollToTop />
    </main>
  );
}

export default Home;
