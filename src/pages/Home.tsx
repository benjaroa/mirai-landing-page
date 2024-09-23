import "@/App.css";
import { MainContent } from "@/components/MainContent.tsx";
import { NewFooter } from "@/components/NewFooter.tsx";
import { IntagramCarrousel } from "@/components/InstagramGallery.tsx";
import { HeroCarousel } from "@/components/HeroCarousel.tsx";
import { DescriptionCard } from "@/components/DescriptionCard.tsx";
import { TopButtons } from "@/components/TopButtons.tsx";
import { ScrollToTop } from "@/components/ScrollToTop.tsx";
import { Testimonials } from "@/components/Testimonials.tsx";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog.tsx";

const dialog = {
  isDialogActive: false,
  title: "Nueva tienda",
  content: "Imagen de la tienda",
};

export const Home = () => {
  return (
    <main className="">
      { dialog.isDialogActive && (
        <Dialog defaultOpen={true}>
          <DialogContent>
            <DialogTitle>{dialog.title}</DialogTitle>
            <p>{dialog.content}</p>
          </DialogContent>
        </Dialog>
      ) }
      <TopButtons activateDarkMode={false} showTopAlertMessage={false} />
      <HeroCarousel /><div className="my-20" />
      <DescriptionCard /><div className="my-20" />
      <MainContent /><div className="my-20" />
      <Testimonials /><div className="my-20" />
      <IntagramCarrousel /><div className="my-20" />
      <NewFooter />
      <ScrollToTop />
    </main>
  );
};
