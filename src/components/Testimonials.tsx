import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { GoogleLogo } from "@/assets/google-logo";
import { Star } from "lucide-react";
import pajaro1 from "@/assets/pajaro_1.svg";

type TestimonialProps = {
  image?: string;
  name: string;
  comment: Record<string, string>;
  starsAmount: number;
  location: "Franklin" | "MUT";
}

const CustomStar = (
  { extraClass, size, color, key }: { extraClass?: string, size?: number, color?: string, key?: string }
) => {
  const currentColor = color || "rgb(250 204 21)";
  return (
    <Star key={key} fill={currentColor} color={currentColor} className={`h-${size} w-${size} ${extraClass}`} />
  )
};  

// Función para intercalar testimonios de Franklin y MUT
const interleaveTestimonials = (franklin: TestimonialProps[], mut: TestimonialProps[]): TestimonialProps[] => {
  const result: TestimonialProps[] = [];
  const maxLength = Math.max(franklin.length, mut.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < franklin.length) {
      result.push(franklin[i]);
    }
    if (i < mut.length) {
      result.push(mut[i]);
    }
  }
  
  return result;
};

export const Testimonials = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  
  // Separar testimonios por ubicación
  const franklinTestimonials = allTestimonials.filter(t => t.location === "Franklin");
  const mutTestimonials = allTestimonials.filter(t => t.location === "MUT");
  
  // Intercalar testimonios
  const testimonials = interleaveTestimonials(franklinTestimonials, mutTestimonials);
  
  return (
    <section id="testimonials" className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center md:items-start mb-8 text-center md:text-left">
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
            <img src={pajaro1} alt="" className="w-20 h-20 sm:w-24 sm:h-24" />
            <h2 className="sm:text-5xl text-4xl font-bold">
              {t("testimonials.title")}
              <span className="text-mirai">{t("testimonials.title-highlight")}</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground pt-4">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Google Reviews info discreta en la esquina superior derecha */}
        <div className="flex items-center gap-2 text-sm mt-4 lg:mt-12">
          <div className="flex items-center gap-2">
            <GoogleLogo className="h-6" viewBox="0 0 85 36" />
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{t("testimonials.google.rate")}/5</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({t("testimonials.google.count")} opiniones)
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden max-h-[550px]">
        {/* Difuminado superior */}
        <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        
        {/* Difuminado inferior */}
        <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        
        {/* Contenedor con animación infinita vertical */}
        <div className="animate-scroll-vertical-mobile md:animate-scroll-vertical">
          {/* Primera serie de testimonios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block sm:columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
            {testimonials.map(
              ({ image, name, comment, starsAmount, location }: TestimonialProps, index: number) => (
                <Card
                  key={`${name}-1-${index}`}
                  className="md:break-inside-avoid overflow-hidden shadow-none"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                      <AvatarImage alt={`${name} avatar`} src={image} />
                      <AvatarFallback>
                        {name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <span className="text-xs text-muted-foreground/60 font-normal">
                          {location}
                        </span>
                      </div>
                      <CardDescription className="flex flex-row">
                        {Array.from({ length: 5 }).map((_, starIndex) => {
                          const key = `star-${name}-1-${index}-${starIndex}`;
                          if (starIndex < starsAmount) {
                            return (
                              <CustomStar color="#d1383a" key={key} size={3} />
                            );
                          }
                          return (
                            <CustomStar key={key} size={3} color="#d1383a" extraClass="opacity-90" />
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
          
          {/* Segunda serie de testimonios (duplicada para loop infinito) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block sm:columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6 mt-4 lg:mt-6">
            {testimonials.map(
              ({ image, name, comment, starsAmount, location }: TestimonialProps, index: number) => (
                <Card
                  key={`${name}-2-${index}`}
                  className="md:break-inside-avoid overflow-hidden"
                >
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                      <AvatarImage alt={`${name} avatar`} src={image} />
                      <AvatarFallback>
                        {name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <span className="text-xs text-muted-foreground/60 font-normal">
                          {location}
                        </span>
                      </div>
                      <CardDescription className="flex flex-row">
                        {Array.from({ length: 5 }).map((_, starIndex) => {
                          const key = `star-${name}-2-${index}-${starIndex}`;
                          if (starIndex < starsAmount) {
                            return (
                              <CustomStar color="#d1383a" key={key} size={3} />
                            );
                          }
                          return (
                            <CustomStar key={key} size={3} color="#d1383a" extraClass="opacity-90" />
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
        </div>
      </div>

      {/* Botón para dejar reseña debajo de los testimonios */}
      <div className="flex justify-center mt-8">
        <a
          className="text-pretty rounded-lg text-white hover:text-white bg-mirai hover:bg-mirai-light items-center px-6 py-3 text-sm font-medium text-center focus:ring-4 focus:outline-none focus:ring-mirai/30 transition-colors"
          href="https://g.page/r/Cbvg1ZWlo1_zEBM/review"
          target="_blank"
        >
          {t("testimonials.review-button-label")}
        </a>
      </div>
    </section>
  );
};

const allTestimonials: TestimonialProps[] = [
  // Testimonios de Franklin
  {
    name: "Takahiro Tanohara",
    comment: {
      es: "Primera vez que voy y me atendieron como si fuera un cliente habitual o un amigo. Son profesionales y gente muy muy amable, el servicio es tan bueno como su comida. Volveré pronto. El ramen karaage, tonkotsu y el postre estaban buenísimos",
      en: "First time I go and they treated me as if I were a regular customer or a friend. They are professional and very very kind people, the service is as good as their food. I'll be back soon. karaage, tonkotsu ramen and the dessert were sooo delicious"
    },
    starsAmount: 5,
    location: "Franklin"
  },
  {
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXsPjaq4gemljPjIO0_bcCrDIlelYB3g7RJRTo-xNFrzFFz7qG2Bw=s36-c-rp-mo-ba3-br100",
    name: "Astrid Pumar",
    comment: {
      es: "Increíble todo!!! Divina la comida, la buena onda y atención un 7/7, todo realmente excelente. Una experiencia maravillosa ❤️  Mis aplausos para el equipo. Felicidades y que sigan los éxitos. Es el mejor ramen que he probado en Santiago",
      en: "Everything is incredible!!! Divine food, good vibes and 7/7 service, everything really excellent. A wonderful experience ❤️ My applause for the team. Congratulations and continued success. It is the best ramen I have had in Santiago"
    },
    starsAmount: 5,
    location: "Franklin"
  },
  {
    name: "Barbara Huinca",
    comment: {
      es: "he venido alrededor de 6 veces, y puedo decir que no me aburre ni me aburrirá comer ramen acá, unos de mis locales favoritos, amo que tengan kimchi y kombucha, hace que sea muy original y entretenido. 1000/10 jaja 🫶🏻",
      en: "I have been here about 6 times, and I can say that I am not bored nor will I be bored eating ramen here, one of my favorite places, I love that they have kimchi and kombucha, it makes it very original and entertaining. 1000/10 haha🫶🏻"
    },
    starsAmount: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVSyJbqLqSXFbl7BrKoiumq0OR4MXUPPChWiC-RSOBu1N36oDU=s36-c-rp-mo-br100",
    location: "Franklin"
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWe3J8_Rjgcjrr_OiVZODZlGpUNXXLoyrfkyQNLoacHASKS77S2=s36-c-rp-mo-ba2-br100",
    name: "Céline Assémat",
    comment: {
      es: "El ramen es excelente, las kombuchas muy ricas con distintos sabores originales como rica rica, y el postre muy original y rico también. 100% recomendable. De 3 platos, 2 son vegetarianos con opción de ser veganos, el ramen que probé con tofu, huevo, kimchi, maní, está super rico.",
      en: "The ramen is excellent, the kombuchas are very delicious with different original flavors such as rica rica, and the dessert is very original and delicious too. 100% recommended. Of the 3 dishes, 2 are vegetarian with the option to be vegan, the ramen I tried with tofu, egg, kimchi, peanuts, is super delicious.",
    },
    starsAmount: 5,
    location: "Franklin"
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
    location: "Franklin"
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
    location: "Franklin"
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
    location: "Franklin"
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
    location: "Franklin"
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
    location: "Franklin"
  },
  {
    name: "Felipe Acuña Gonzalez",
    starsAmount: 5,
    comment: {
      es: "Exquisito, el caldo con mucha textura y sabor. De mis lugares favoritos de ramen en Chile.",
      en: "Exquisite, the broth with a lot of texture and flavor. One of my favorite ramen places in Chile.",
    },
    location: "Franklin"
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
    location: "Franklin"
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
    location: "Franklin"
  },
  {
    name: "Gabriela Barceló",
    starsAmount: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWmuDMVAc9cC1aJyfrMHJCgcKladU26A0Ld2yEooh4x_iuutVI1=s36-c-rp-mo-ba4-br100",
    comment: {
      es: "Los mejores baos que he comido, sabores fuera de lo esperado! Y el ramen también muy distinto a todo lo que había probado antes, pero exquisito! La kombucha de eucalipto también muy distinta! No es económico pero tampoco caro, y el lugar es la factoría franklin que es perfecto para pasear mientras esperas una mesa!",
      en: "The best baos I've ever eaten, flavors beyond expectations! And the ramen was also very different from anything I had tried before, but exquisite! The eucalyptus kombucha is also very different! It's not cheap but it's not expensive either, and the place is the Franklin Factory which is perfect for walking around while you wait for a table!",
    },
    location: "Franklin"
  },
  {
    name: "Herman Oporto Seguel",
    starsAmount: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWY0HeN5SNabxLtXqAKzhEIpsQ4NkTqow4XysLirf43zPEKqWk=s36-c-rp-mo-ba3-br100",
    comment: {
      es: "De lo mejor que he probado. La atención muy cordial desde un inicio a pesar de estar con mucha gente esperando. Comencé con una kombucha de eucalipto fenomenal, muy refrescante y balanceada, hecha por ellos mismos, hay otras opciones interesantes como kombucha lavanda y más tradicionales como limón gengibre. Luego de fondo, un tantanmen vegetariano... increíble! Generosa porción, la calidad de los fideos, el sabor cremoso y picante de la base , la firmeza del tofu (podrían marinar un poco más el tofu para más sabor, pequeña sugerencia) y las verduras encurtidas le dieron un toque de frescura y acidez delicioso, y en conjunto un deleite sensorial. Además la meticulosa preparación y presentacion , todo frente a uno, se agradece y felicita.. volvería? Definitivamente! Muy recomendado",
      en: "The best I've ever tried. Very cordial attention from the beginning despite having many people waiting. I started with a phenomenal eucalyptus kombucha, very refreshing and balanced, made by themselves, there are other interesting options like lavender kombucha and more traditional ones like lemon ginger. Then in the background, a vegetarian tantanmen... incredible! Generous portion, the quality of the noodles, the creamy and spicy flavor of the base, the firmness of the tofu (they could marinate the tofu a little more for more flavor, small suggestion) and the pickled vegetables gave it a delicious touch of freshness and acidity , and overall a sensory delight. In addition, the meticulous preparation and presentation, all in front of you, is appreciated and congratulated.. Would I return? Definitely! Highly recommended",
    },
    location: "Franklin"
  },
  
  // Testimonios de MUT - Reemplazar con comentarios reales de Google Maps
  {
    name: "Colette Franchesca Thumala Rojas",
    comment: {
      es: "He ido varias veces y estoy gratamente sorprendida por el perfil de sabor que manejan en los platos, el karate es un poco picante y la kombucha fría es refrescante. Lo recomiendo totalmente",
      en: "I have been several times and I am greatly surprised by the flavor profile they handle in the dishes, the karate is a little spicy and the cold kombucha is refreshing. I recommend it totally"
    },
    starsAmount: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUfcG0hAJ08jFexwtWB13EddiV6-hw71LHhyorNUPdbUl8ku5yRgQ=w36-h36-p-rp-mo-ba2-br100",
    location: "MUT"
  },
  {
    name: "Agu",
    comment: {
      es: "Todo muy rico, buena atención y rápido el servicio. Esta sucursal se presenta como algo mas express en comparación a su local en Franklin, pero muy ameno el sitio y la atención súper cercana. Muy recomendado pasar por aquí si andan por el mut🩷.",
      en: "Everything is very rich, good service and fast. This branch presents itself as something more express compared to its local in Franklin, but very nice site and super close attention. Highly recommended to pass by here if you are in the mut🩷."
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXXTzZ_SDZQjHIlTSkj4UnHHQLjD31V5HQrqIjsIBh_uXdmsqMm=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "María Jesús Montenegro Fernández",
    comment: {
      es: "La comida es igual de buena que en el local de Franklin. Me gusta comer en la barra, los chicos son buena onda y atienden muy bien. Mis favoritos son el HMK 🌱 y el tantamen vegetariano 🍜💚 las kombuchas son muy ricas 🫰🏼",
      en: "The food is just as good as in the Franklin local. I like to eat at the bar, the guys are good vibes and attend very well. My favorites are the HMK 🌱 and the tantamen vegetarian 🍜💚 the kombuchas are very rich 🫰🏼"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVg66D85Q_SSwyNwMhGSSkSkY3jW8rJlO0DJoCahbcWFbegh0Qy_A=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Olivia Weale",
    comment: {
      es: "Estaba muy emocionada de encontrar ramen real, delicioso y hecho a mano en Santiago! Esta comida es la auténtica y la kombucha estaba deliciosa también. Comimos el ramen vegetariano y el hummus como entrada. Mi único deseo es que tuvieran empanadas. ¡Definitivamente recomiendo!",
      en: "was so excited to find real, delicious, handmade ramen in Santiago! this stuff is the real deal and the kombucha was yummy too. we had the vegetarian ramen and the hummus appetizer. my only wish is that they had dumplings. definitely recommend!"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV1f1n38XKbPN8P4UlZguJi6U1IllyangttgA0FDpgcayCFhXAkHQ=w36-h36-p-rp-mo-ba2-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Silvana Mauna",
    comment: {
      es: "Gran sorpresa !!!! Maravilloso ramen Tantanmen, una explosión de sabores en boca, una fusión Thai coreana maravillosa, Deberías probarlo ( dulce levemente picante cremoso con toques acids) mmmm  buenisimo, probé la Kombucha , RicaRica, bien lograda burbujeante y puedo sentir un poco de eucalipto y alguna flor, buenisimo!!",
      en: "Great surprise !!!! Wonderful Tantanmen ramen, a explosion of flavors in the mouth, a wonderful Thai-Korean fusion, you should try it (sweet slightly spicy creamy with acidic touches) mmmm very good, I tried the Kombucha, RicaRica, well done fizzing and I can feel a little eucalyptus and some flower, very good!!"
    },
    image: "https://lh3.googleusercontent.com/a/ACg8ocIYcyHX5e1UvvILzhK1WlEcN3T2a1hWQ87JPIjSm6aBO1mNmA=w36-h36-p-rp-mo-ba2-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Camila Guzman",
    comment: {
      es: "Insuperable Mirai Food Lab, sin duda el mejor ramen de Santiago, las kombuchas muy refrescantes, además excelente atención ",
      en: "Insurmountable Mirai Food Lab, without a doubt the best ramen in Santiago, the kombuchas very refreshing, in addition excellent service "
    },
    image: "https://lh3.googleusercontent.com/a/ACg8ocIPJ5T_VZsq4Vm9KxnLmk_ZXmdK50R5cEzPpdqVWFMs2JOUyA=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Carla Durán",
    comment: {
      es: "Matías, Max y Natalia son un excelente equipo. Nos encantó la comida, la atención, son todos muy a amables, explicaron cada plato, no es muy común de encontrar. Secos! 🤍",
      en: "Matías, Max and Natalia are an excellent team. We loved the food, the attention, they are all very friendly, explained each plate, it is not very common to find. Dry! 🤍"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUlEgTZIEzp7qQf1Jm5PxE3EC6jzELOGWDAUwU4HC3tvj2jD5Y-=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Cami Kaid",
    comment: {
      es: "Local muy grato, cocineros muy bien preparados, linea impecable!! Con mucho gusto vuelvo a venir y por su puesto a recomendar!! Felicitaciones por su buena comida y servicio ♥️☀️",
      en: "Very nice local, cooks very well prepared, impeccable line!! With much pleasure I will come back and by my own to recommend!! Congratulations for your good food and service ♥️☀️"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXp2pFoK-SwAKHvf4sdFYnvmUzl7j_dMJdtFprOKRgaYhH-bPFS=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Pedro Guillermo",
    comment: {
      es: "Es el mejor ramen que he probado en Chile. Desde el año 2018, cuando fui a Japón, estuve buscando un ramen así de bueno en Chile y hoy lo encontré. Los chef trabajan de una forma espectacular, pulcros y ordenados. Magnífico! ",
      en: "It is the best ramen I have tried in Chile. Since 2018, when I went to Japan, I was looking for a ramen as good in Chile and today I found it. The chefs work in a spectacular way, clean and orderly. Magnificent!"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXXCqBfPc6tWBvgHVikJgDeNTHO2M3JNgd7-R9MDN7mzmLIrqxV=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
  {
    name: "Constanza Charme",
    comment: {
      es: "Ramen creativo, sabroso y diferente, ideal para ir en plan relajado y probar algo fuera de lo común. El tonkotsu lo mejor, lo recomiendo x1000!!!",
      en: "Creative ramen, tasty and different, ideal for going in a relaxed plan and trying something outside of the common. The tonkotsu is the best, I recommend x1000!!!"
    },
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVIGZIU3eleKSjgiMMHR-DTPzFvFooncwafehq-SkVaUWqgwA=w36-h36-p-rp-mo-br100",
    starsAmount: 5,
    location: "MUT"
  },
];
