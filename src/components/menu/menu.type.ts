type MenuRestrictions = {
  isVegan?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isLactoseFree?: boolean;
  isSpicy?: boolean;
  isSweet?: boolean;
  isCold?: boolean;
};

type HourAndMinutes =
  `${number}${number}:${number}${number}`;
type IsoDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

type OpeningHours = {
  monday?: HourAndMinutes[];
  tuesday?: HourAndMinutes[];
  wednesday?: HourAndMinutes[];
  thursday?: HourAndMinutes[];
  friday?: HourAndMinutes[];
  saturday?: HourAndMinutes[];
  sunday?: HourAndMinutes[];
  exceptions?: Record<IsoDate, HourAndMinutes[]>;
};

type Lang =
  "es" |
  "en" |
  "de" |
  "br";

type Currency =
  "CLP" |
  "ARS" |
  "MXN" |
  "USD";

export type Item = {
  name: string;
  type:
    | "single-item"
    | "heading"
    | "sub-heading"
    | "image"
    | "text"
    | "promotion"
    | "opening-hours"
    | "box"
    | "logo"
    | "button";
  order?: number;
  className?: string;
  style?: Record<string, string>;
  icon?: string;
  color?: string;
  description?: string;
  properties?: MenuRestrictions | Record<string, string>;
  children?: Record<keyof Lang, Omit<Item, "type">>;
};

export type Business = {
  name: string;
  logo?: string;
  openingHours?: OpeningHours;
  contactInformation?: {
    managerName?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  address: {
    street: string;
    number: string;
    district: string;
    city: string;
    postalCode: string;
    country: string;
  };
  location?: {
    latitude: number;
    longitude: number;
  };
  delivery?: {
    available: boolean;
    radius: number;
    fee: number;
  };
  paymentMethods?: string[];
  deliveryHours?: OpeningHours;
  properties: {
    isPetFriendly?: boolean;
    hasSmokingArea?: boolean;
    hasWifi?: boolean;
    hasParking?: boolean;
    isAlcoholServed?: boolean;
    isTakeAwayAvailable?: boolean;
  };
  localeConfiguration?: {
    currency: Currency;
    language: Lang;
    decimalSeparator: string;
    thousandSeparator: string;
    dateFormat: string;
    timeFormat: string;
    numberOfDecimals: number;
  };
  defaultButtons?: {
    showShareButton: boolean;
    showCallButton: boolean;
    showInstagramIcon: boolean;
  }
};

export type GeneralOptions = {
  showToTopButton?: boolean;
  style?:
    | "default"
    | "minimal"
    | "modern"
    | "elegant"
    | "classic"
    | "retro";
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    text?: string;
  };
  typography?: {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
  };
  isDarkModeActive?: boolean;
}

export type Menu = {
  business: Business;
  items: Item[];
  options?: GeneralOptions;
};
