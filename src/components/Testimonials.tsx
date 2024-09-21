import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { GoogleLogo } from "../assets/google-logo";
import { Star } from "lucide-react";

interface TestimonialProps {
  image?: string;
  name: string;
  comment: Record<string, string>;
  starsAmount: number;
}

const testimonials: TestimonialProps[] = [
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWe3J8_Rjgcjrr_OiVZODZlGpUNXXLoyrfkyQNLoacHASKS77S2=s36-c-rp-mo-ba2-br100",
    name: "Céline Assémat",
    comment: {
      es: "El ramen es excelente, las kombuchas muy ricas con distintos sabores originales como rica rica, y el postre muy original y rico también. 100% recomendable. De 3 platos, 2 son vegetarianos con opción de ser veganos, el ramen que probé con tofu, huevo, kimchi, maní, está super rico.",
      en: "The ramen is excellent, the kombuchas are very delicious with different original flavors such as rica rica, and the dessert is very original and delicious too. 100% recommended. Of the 3 dishes, 2 are vegetarian with the option to be vegan, the ramen I tried with tofu, egg, kimchi, peanuts, is super delicious.",
    },
    starsAmount: 5,
  },
  {
    name: "Rod tap ma",
    comment: {
      es: "Siempre es una buena experiencia.",
      en: "It's always a good experience.",
    },
    starsAmount: 5,
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWptLPLPpJI93Gczfqjvwjf2JNA-lCVo0fznJHxdqyBxyTc51SHAA=s36-c-rp-mo-br100",
    name: "Julio Muñoz",
    comment: {
      es: "En general estaba bien, buen sabor y buena atención, solo que el caldo estaba algo frío",
      en: "In general it was good, good flavor and good service, only the broth was a little cold",
    },
    starsAmount: 4,
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV7tpLcRFewpWOYi4y0wpLCC3dBWBvoqg7dxGGu8ZSXFpByHDEH=s36-c-rp-mo-br100",
    name: "Nicole Vilches",
    comment: {
      es: "Espectacular, comida 100% recomendada para quienes quieran probar sabores intensos y distinto a lo que acostumbramos",
      en: "Spectacular, food 100% recommended for those who want to try intense flavors and different from what we are used to",
    },
    starsAmount: 5,
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV-FAIi00gUOYsWAIrHs7P4E41EzO7rIcxudXdcC1lYMegfHlaM=s36-c-rp-mo-ba4-br100",
    name: "Alejandro Magnet",
    comment: {
      es: "Súper rico y muy muy bien atendido. Vale la pena por todos lados",
      en: "Super rich and very very well attended. It's worth it everywhere",
    },
    starsAmount: 5,
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXKbdFSBwc7l6pACPnMS1a2SmDrjv59pHGNGgQ7eZIYz60dQ1PJ=s36-c-rp-mo-ba2-br100",
    name: "Valentina Colistro",
    comment: {
      es: "El servicio es muy bueno pero la comida es mejor aún. Súper rica y los dueños están en todos los detalles",
      en: "The service is very good but the food is even better. Super rich and the owners are in all the details",
    },
    starsAmount: 5,
  },
  {
    name: "Fabianni Duarte Oyanedel",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXMV-KB70FGIuZ7mApAoNlsCaaymMlN5h691DQfMcakQ5DCys9r=s36-c-rp-mo-ba2-br100",
    starsAmount: 5,
    comment: {
      es: "Debo ser honesto con ustedes, prueben esta maravilla pronto porque es el mejor ramen que jamás van a probar y dudo que permanezca en el barrio por mucho. Esa es mi impresión más sincera. Puedes ir sólo o acompañado, el sabor es una experiencia única que tomará cada paladar por sorpresa.",
      en: "I have to be honest with you, try this wonder soon because it is the best ramen you will ever try and I doubt it will stay in the neighborhood for long. That is my most sincere impression. You can go alone or accompanied, the flavor is a unique experience that will take each palate by surprise.",
    },
  },
  {
    name: "Karla Pavez",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXc_b4_0pltJsvXS_FjC2wsuqg87SyflhaPNHuvxGDviuilXj3O=s36-c-rp-mo-ba4-br100 ",
    comment: {
      es: "Excelente lugar para comer en Franklin. Pedimos bahos y karaage de entrada y plato de fondo el ramen tonkotsu, que fue muy contundente. Para beber pedimos kombuchas, muy buenas. Esperamos una media hora para poder sentarnos a comer, pero nos atendieron super bien. Una muy buena experiencia.",
      en: "Excellent place to eat in Franklin. We ordered bahos and karaage as a starter and the main course was the tonkotsu ramen, which was very filling. To drink we ordered kombuchas, very good. We waited half an hour to be able to sit down to eat, but they served us very well. A very good experience.",
    },
    starsAmount: 5,
  },
  {
    name: "Felipe Acuña Gonzalez",
    starsAmount: 5,
    comment: {
      es: "Exquisito, el caldo con mucha textura y sabor. De mis lugares favoritos de ramen en Chile.",
      en: "Exquisite, the broth with a lot of texture and flavor. One of my favorite ramen places in Chile.",
    },
  },
  {
    name: "Patricia Calderon",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWFBj1gRaQujhXYz_gN5akvdok_H6niwuHCj7V6B8OOaAeOO8c=s36-c-rp-mo-ba5-br100",
    starsAmount: 5,
    comment: {
      es: "Fuimos a probar los ramen, exquisito, super recomendado, buena atención y conversación con su dueño.volveremos",
      en: "We went to try the ramen, exquisite, highly recommended, good service and conversation with the owner. We will return",
    },
  },
  {
    name: "Catalina Acevedo Latorre",
    starsAmount: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVr9AgPwZFTbPcWWz5Mmb0PLRGPKpDbClQaG3B6mF26zw7TLpBB=s36-c-rp-mo-br100",
    comment: {
      es: "Este lugar es una experiencia culinaria completa. Me sorprendí con los sabores, el estilo y la buena atención de los dueños/garzones. Recomiendo llegar temprano porque hay una lista de espera larga, pero anotan tu teléfono y puedes dar vueltas mientras se desocupa una mesa. Increíble!!!",
      en: "This place is a complete culinary experience. I was surprised by the flavors, the style and the good attention of the owners/waitresses. I recommend arriving early because there is a long waiting list, but they take your phone number and you can wander around while a table becomes available. Incredible!!!",
    },
  },
  {
    name: "Gabriela Barceló",
    starsAmount: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWmuDMVAc9cC1aJyfrMHJCgcKladU26A0Ld2yEooh4x_iuutVI1=s36-c-rp-mo-ba4-br100",
    comment: {
      es: "Los mejores baos que he comido, sabores fuera de lo esperado! Y el ramen también muy distinto a todo lo que había probado antes, pero exquisito! La kombucha de eucalipto también muy distinta! No es económico pero tampoco caro, y el lugar es la factoría franklin que es perfecto para pasear mientras esperas una mesa!",
      en: "Los mejores baos que he comido, sabores fuera de lo esperado! Y el ramen también muy distinto a todo lo que había probado antes, pero exquisito! La kombucha de eucalipto también muy distinta! No es económico pero tampoco caro, y el lugar es la factoría franklin que es perfecto para pasear mientras esperas una mesa!",
    },
  },
  {
    name: "Herman Oporto Seguel",
    starsAmount: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWY0HeN5SNabxLtXqAKzhEIpsQ4NkTqow4XysLirf43zPEKqWk=s36-c-rp-mo-ba3-br100",
    comment: {
      es: "De lo mejor que he probado. La atención muy cordial desde un inicio a pesar de estar con mucha gente esperando. Comencé con una kombucha de eucalipto fenomenal, muy refrescante y balanceada, hecha por ellos mismos, hay otras opciones interesantes como kombucha lavanda y más tradicionales como limón gengibre. Luego de fondo, un tantanmen vegetariano... increíble! Generosa porción, la calidad de los fideos, el sabor cremoso y picante de la base , la firmeza del tofu (podrían marinar un poco más el tofu para más sabor, pequeña sugerencia) y las verduras encurtidas le dieron un toque de frescura y acidez delicioso, y en conjunto un deleite sensorial. Además la meticulosa preparación y presentacion , todo frente a uno, se agradece y felicita.. volvería? Definitivamente! Muy recomendado",
      en: "De lo mejor que he probado. La atención muy cordial desde un inicio a pesar de estar con mucha gente esperando. Comencé con una kombucha de eucalipto fenomenal, muy refrescante y balanceada, hecha por ellos mismos, hay otras opciones interesantes como kombucha lavanda y más tradicionales como limón gengibre. Luego de fondo, un tantanmen vegetariano... increíble! Generosa porción, la calidad de los fideos, el sabor cremoso y picante de la base , la firmeza del tofu (podrían marinar un poco más el tofu para más sabor, pequeña sugerencia) y las verduras encurtidas le dieron un toque de frescura y acidez delicioso, y en conjunto un deleite sensorial. Además la meticulosa preparación y presentacion , todo frente a uno, se agradece y felicita.. volvería? Definitivamente! Muy recomendado",
    },
  },
];

const CustomStar = (
  { extraClass, size, color, key }: { extraClass?: string, size?: number, color?: string, key?: string }
) => {
  const currentColor = color || "rgb(250 204 21)";
  return (
    <Star key={key} fill={currentColor} color={currentColor} className={`h-${size} w-${size} ${extraClass}`} />
  )
};  

export const Testimonials = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <section id="testimonials" className="container">
      <h2 className="text-3xl md:text-4xl font-bold">{t("testimonials.title")}</h2>
      <p className="text-xl text-muted-foreground pt-4 pb-8">
        {t("testimonials.description")}
      </p>

      <Card className="mb-6">
        <CardHeader className="text-xl pb-0 flex flex-row content-baseline">
          <GoogleLogo className="h-8 mr-2" viewBox="0 0 85 36" /> reviews
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex flex-row content-center items-center">
            {`${t("testimonials.google.rate")} `}
            <CustomStar extraClass="ml-2" />
            <CustomStar />
            <CustomStar />
            <CustomStar />
            <CustomStar extraClass="mr-2" />{" "}
            <span className="text-sm font-light">({t("testimonials.google.count")} reviews)</span>
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
            className={`text-pretty rounded-lg text-white hover:text-white bg-blue-700 hover:bg-blue-900 items-center px-5 py-3 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300`}
            href="https://g.page/r/Cbvg1ZWlo1_zEBM/review"
            target="_blank"
          >
            {t("testimonials.review-button-label")}
          </a>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, comment, starsAmount }: TestimonialProps) => (
            <Card
              key={name}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt={`${name} avatar`} src={image} />
                  <AvatarFallback>
                    {name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const key = `star-${name}-${index}`;
                      if (index < starsAmount) {
                        return (
                          <CustomStar key={key} size={3} />
                        );
                      }
                      return (
                        <CustomStar key={key} size={3} color="gray" extraClass="opacity-90" />
                      );
                    })}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="text-slate-600 text-base">
                { comment[language] }
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
