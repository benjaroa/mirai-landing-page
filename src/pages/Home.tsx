import "@/App.css";
import { NewFooter } from "@/components/NewFooter.tsx";
import { IntagramCarrousel } from "@/components/InstagramGallery.tsx";
import { HeroCarousel } from "@/components/HeroCarousel.tsx";
import { DescriptionCard } from "@/components/DescriptionCard.tsx";
import { TopButtons } from "@/components/TopButtons.tsx";
import { ScrollToTop } from "@/components/ScrollToTop.tsx";
import { Testimonials } from "@/components/Testimonials.tsx";
import { WhereToFindUs } from "@/components/WhereToFindUs.tsx";
import { ShopCategories } from "@/components/ShopCategories.tsx";
import { Collaborations } from "@/components/Collaborations.tsx";
import { OurFounders } from "@/components/OurFounders.tsx";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog.tsx";
// import { OnlineShopCTA } from "@/components/online-shop-CTA";

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
      <HeroCarousel /><div className="" />
      <DescriptionCard /><div className="" />
      <WhereToFindUs /><div/>
      <ShopCategories /><div className="mb-10" />
      <OurFounders /><div className="my-20" />
      <Testimonials /><div className="my-20" />
      <Collaborations /><div className="my-20" />
      <IntagramCarrousel /><div className="my-20" />
      <NewFooter />
      {/* <OnlineShopCTA /> */}
      <ScrollToTop />
    </main>
  );
};
