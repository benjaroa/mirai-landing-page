import { ScrollArea } from "../components/ui/scroll-area";
import heroImage1 from "/assets/hero/hero-1.jpg";
import heroImage2 from "/assets/hero/hero-2.jpg";
import heroImage3 from "/assets/hero/hero-3.jpg";
import heroImage4 from "/assets/hero/hero-4.jpg";
import { CustomCard, CustomCardType } from "./Card";
import jsonPartnersList from "../assets/partners.json";
import { Dispatch, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SquareMinus, SquarePlus } from "lucide-react";
// import { useTransition } from "react-spring";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];
const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
const currentImage = images[getRandomIndex(0, images.length)];

const goBack = () => {
  return window.history.back();
};

const partnersListParsed = jsonPartnersList.reduce(
  (
    acc: CustomCardType[],
    { name, instagram, website, district, address, labels }
  ) => {
    const partner: CustomCardType = {};
    if (name) partner.name = name;
    if (instagram) partner.instagram = instagram;
    if (website) partner.website = website;
    if (district) partner.district = district;
    if (address) partner.address = address;
    if (labels) partner.labels = labels.split(", ");
    return [...acc, partner];
  },
  []
);

const filterOptions = {
  districts: [
    ...new Set(
      (partnersListParsed as CustomCardType[]).reduce<string[]>(
        (acc, { district }) => {
          if (!district) return acc;
          return [...acc, district];
        },
        []
      )
    ),
  ],
  labels: [
    ...new Set(
      (partnersListParsed as CustomCardType[]).reduce<string[]>((acc, { labels }) => {
        if (!labels) return acc;
        return [...acc, ...labels];
      }, [])
    ),
  ],
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const addOrRemove = (array: string[], value: string) => {
  console.log('test', array, value);
  if (array.includes(value)) {
    return array.filter((item) => item !== value);
  }
  return [...array, value];
};

export const Partners = () => {
  const [districtFilter, setDistrictFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const stateMap: Record<string, { title: string, setFn: Dispatch<SetStateAction<string[]>>; state: string[]; }> = {
    districts: { title: 'Comunas', setFn: setDistrictFilter, state: districtFilter },
    labels: { title: 'Tipo', setFn: setTypeFilter, state: typeFilter },
  };

  const partnersList = partnersListParsed.filter(({ district, labels }) => {
    if (districtFilter.length && district && !districtFilter.includes(district)) return false;
    if (typeFilter.length && labels && !labels.some((label) => typeFilter.includes(label))) return false;
    return true;
  });

  // const transition = useTransition(partnersList, {
  //   from: { opacity: 0, marginTop: 5 },
  //   enter: { opacity: 1, maxHeight: 50, marginTop: 5 },
  //   leave: { opacity: 0, maxHeight: 0, marginTop: 0 }
  // });

  return (
    <div className="container p-0 relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2">
      <div className="relative hidden h-full flex-col bg-muted text-white dark:border-r lg:flex">
        <img
          src={currentImage}
          alt="Mirai"
          className="w-screen h-screen object-cover top-0"
        />
      </div>
      <ScrollArea className="py-2 lg:py-4 h-full">
        <div className="mx-auto sm:py-8 flex w-full h-full flex-col justify-center">
          <div className="container mb-4 flex flex-row-reverse">
            <a
              href="#"
              onClick={goBack}
              className="bg-mirai text-white rounded-lg mb-6 p-4inline-flex items-center px-5 py-2.5 text-sm font-medium text-center hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              volver 👉
            </a>
          </div>
          <div className="container prose">
            <h1 className="mb-4">Partners</h1>
            <div>
              <button onClick={() => setShowFilters(!showFilters)}>
                <h2 className="text-xl mt-0 mb-2 flex items-center">
                  {showFilters && <SquareMinus className={`h-4 w-4 mr-2`} />}
                  {!showFilters && <SquarePlus className={`h-4 w-4 mr-2`} />}
                  Filtros
                </h2>
              </button>
              <div className={`columns-2 m-2 ${showFilters ? '' : 'hidden'}`}>
                {Object.entries(filterOptions).map(([key, vals]) => (
                    <div className="m-0 break-after-column">
                      <h4 className="mt-0 text-base">{stateMap[key].title}</h4>
                      {vals.map((val) => (
                        <div
                          key={`${name}-${val}`}
                          className="flex space-y-2"
                        >
                          <Checkbox
                            id={`chbox-${name}-${val}`}
                            checked={stateMap[key].state.includes(val)}
                            onClick={() => stateMap[key].setFn(addOrRemove(stateMap[key].state, val))}
                          />
                          <Label className="font-normal" htmlFor={`chbox-${name}-${val}`}>
                            {capitalizeFirstLetter(val)}
                          </Label>
                        </div>))}
                    </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-0 gap-0 sm:gap-5 sm:grid-cols-2">
              {(partnersList as CustomCardType[]).map((partner, i) => (
                <CustomCard key={`${name}-${i}`} {...partner} />
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
