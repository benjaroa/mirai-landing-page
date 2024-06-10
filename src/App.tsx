import "./App.css";
import { MainContent } from "./components/MainContent.tsx";
import { NewFooter } from "./components/NewFooter.tsx";
import { IntagramCarrousel } from "./components/InstagramGallery.tsx";
import { InstagramGallery } from "./components/InstagramGallery.tsx";
import { Hero } from "./components/Hero.tsx";
// import { TopHeader } from "./components/TopHeader.tsx";

const App = () => {
  return (
    <main className="">
      <Hero />
      <div className="my-20" />
      <MainContent />
      <IntagramCarrousel />
      <div className="my-20" />
      <InstagramGallery />
      <div className="my-20" />
      <NewFooter />
    </main>
  );
}

export default App;
