import "../App.css";
import { MainContent } from "../components/MainContent.tsx";
import { NewFooter } from "../components/NewFooter.tsx";
import { IntagramCarrousel } from "../components/InstagramGallery.tsx";
import { HeroCarousel } from "../components/HeroCarousel.tsx";
import { DescriptionCard } from "../components/DescriptionCard.tsx";
import { TopButtons } from "../components/TopButtons.tsx";
import { ScrollToTop } from "../components/ScrollToTop.tsx";
import { Testimonials } from "@/components/Testimonials.tsx";
// import { Dialog, DialogContent, DialogTitle } from "./ui/dialog.tsx";

export const Home = ({ "show-testimonials": st }: { "show-testimonials"?: boolean }) => {
  return (
    <main className="">
      { /* / /}
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogTitle>Nueva tienda</DialogTitle>
          <p>Imagen de la tienda</p>
        </DialogContent>
      </Dialog>
      { /* */ }
      <TopButtons activateDarkMode={false} showTopAlertMessage={true} />
      <HeroCarousel />
      <div className="my-20" />
      <DescriptionCard />
      <div className="my-20" />
      <MainContent />
      <div className="my-20" />
      {st && (<><Testimonials /><div className="my-20" /></>)}
      <IntagramCarrousel />
      <div className="my-20" />
      <NewFooter />
      <ScrollToTop />
    </main>
  );
};
