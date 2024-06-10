import "./App.css";
import { MainContent } from "./components/MainContent.tsx";
import { NewFooter } from "./components/NewFooter.tsx";
import { IntagramCarrousel } from "./components/InstagramGallery.tsx";
import { HeroCarousel } from "./components/HeroCarousel.tsx";
import { DescriptionCard } from './components/DescriptionCard';
import { TopButtons } from "./components/TopButtons.tsx";
import { ScrollToTop } from './components/ScrollToTop';

const App = () => {
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

export default App;
