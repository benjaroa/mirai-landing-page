import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button"
import { useTranslation } from "react-i18next";
import { MessageSquareQuote, Star } from "lucide-react";
import { GoogleLogo } from "../assets/google-logo";

interface TestimonialProps {
  image?: string;
  name: string;
  comment: string;
  starsAmount: number;
}

const testimonials: Record<string, TestimonialProps[]> = {
  es: [
    {
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWe3J8_Rjgcjrr_OiVZODZlGpUNXXLoyrfkyQNLoacHASKS77S2=s36-c-rp-mo-ba2-br100",
      name: "Céline Assémat",
      comment: "El ramen es excelente, las kombuchas muy ricas con distintos sabores originales como rica rica, y el postre muy original y rico también. 100% recomendable.",
      starsAmount: 5,
    },
    {
      name: "Rod tap ma",
      comment:
        "Siempre es una buena experiencia.",
      starsAmount: 5,
    },
    {
      image: "https://lh3.googleusercontent.com/a-/ALV-UjWptLPLPpJI93Gczfqjvwjf2JNA-lCVo0fznJHxdqyBxyTc51SHAA=s36-c-rp-mo-br100",
      name: "Julio Muñoz",
      comment:
        "En general estaba bien, buen sabor y buena atención, solo que el caldo estaba algo frío",
      starsAmount: 4,
    },
    {
      image: "https://lh3.googleusercontent.com/a-/ALV-UjV7tpLcRFewpWOYi4y0wpLCC3dBWBvoqg7dxGGu8ZSXFpByHDEH=s36-c-rp-mo-br100",
      name: "Nicole Vilches",
      comment:
        "Espectacular, comida 100% recomendada para quienes quieran probar sabores intensos y distinto a lo que acostumbramos",
      starsAmount: 5,
    },
    {
      image: "https://lh3.googleusercontent.com/a-/ALV-UjV-FAIi00gUOYsWAIrHs7P4E41EzO7rIcxudXdcC1lYMegfHlaM=s36-c-rp-mo-ba4-br100",
      name: "Alejandro Magnet",
      comment:
        "Súper rico y muy muy bien atendido. Vale la pena por todos lados",
      starsAmount: 5,
    },
    {
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXKbdFSBwc7l6pACPnMS1a2SmDrjv59pHGNGgQ7eZIYz60dQ1PJ=s36-c-rp-mo-ba2-br100",
      name: "Valentina Calistro",
      comment:
        "El servicio es muy bueno pero la comida es mejor aún. Súper rica y los dueños están en todos los detalles",
      starsAmount: 5,
    },
    {
      name: "Fabianni Duarte Oyanedel",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXMV-KB70FGIuZ7mApAoNlsCaaymMlN5h691DQfMcakQ5DCys9r=s36-c-rp-mo-ba2-br100",
      starsAmount: 5,
      comment:
        "Debo ser honesto con ustedes, prueben esta maravilla pronto porque es el mejor ramen que jamás van a probar y dudo que permanezca en el barrio por mucho. Esa es mi impresión más sincera. Puedes ir sólo o acompañado, el sabor es una experiencia única que tomará cada paladar por sorpresa.",
    }
  ],
  en: [],
};

export const Testimonials = () => {
  const { t, i18n: { language } } = useTranslation();
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">Testimonios</h2>
      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lo que dicen nuestros clientes
      </p>

      <Card className="mb-6">
        <CardHeader className="text-xl pb-0 flex flex-row content-baseline">
          <GoogleLogo className="h-8 mr-2" viewBox="0 0 85 36" /> reviews
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex flex-row content-center items-center">
            4,8{" "}
            <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-6 w-6 ml-2" />
            <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-6 w-6" />
            <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-6 w-6" />
            <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-6 w-6" />
            <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-6 w-6 mr-2" />
            {" "}
            <span className="text-sm font-light">(152 reviews)</span>
          </div>
          {/* <div className="flex flex-col items-center">
            <div className="flex gap-2 items-end ">
              <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-5 w-5" />
              <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-7 w-7 mb-3" />
              <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-12 w-12 mb-3" />
              <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-7 w-7 mb-3" />
              <Star fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-5 w-5" />
            </div>
            <p className="text-8xl font-semibold">4,8</p>
            <p className="text-xl mt-1">de 152 reviews</p>
          </div> */}

          <a
            className={`${buttonVariants({ variant: "outline" })} button rounded-lg text-white hover:text-white bg-blue-700 hover:bg-blue-900 p-4inline-flex items-center p-5 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300`}
            href="https://g.page/r/Cbvg1ZWlo1_zEBM/review"
            target="_blank"
          >
            {t("testimonials.review-button-label")}
            <MessageSquareQuote className="h-6 w-6 ml-2" />
          </a>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials[language].map(
          ({ image, name, comment, starsAmount }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  {/* <CardDescription>{userName}</CardDescription> */}
                  <CardDescription className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, index) => {
                      if (index < starsAmount) {
                        return (
                          <Star key={index} fill="rgb(250 204 21)" color="rgb(250 204 21)" className="h-3 w-3" />
                        );
                      }
                      return (
                        <Star key={index} fill="gray" color="gray" className="h-3 w-3 opacity-50" />
                      );
                    })}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
