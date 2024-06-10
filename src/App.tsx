import "./App.css";
import { MainContent } from "./components/MainContent.tsx";
import { NewFooter } from "./components/NewFooter.tsx";
import { IntagramCarrousel } from "./components/InstagramGallery.tsx";
import { HeroCarousel } from "./components/HeroCarousel.tsx";
import { DescriptionCard } from './components/DescriptionCard';

const App = () => {
  return (
    <main className="">
      <HeroCarousel />
      <div className="my-20" />
      <DescriptionCard />
      <div className="my-20" />
      <MainContent />
      <div className="my-20" />
      <IntagramCarrousel />
      <div className="my-20" />
      <NewFooter />
    </main>
  );
}

export default App;
