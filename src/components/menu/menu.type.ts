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

export type Item = {
  name: string;
  type:
    | "single-item"
    | "heading"
    | "subheading"
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
  children?: Item[];
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
    address?: string;
    socialMedia?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  addres: {
    street: string;
    number: string;
    city: string;
    postalCode: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  delivery: {
    available: boolean;
    radius: number;
    fee: number;
  };
  paymentMethods: string[];
  deliveryHours?: OpeningHours;
  properties: {
    isPetFriendly?: boolean;
    hasSmokingArea?: boolean;
    hasWifi?: boolean;
    hasParking?: boolean;
    isAlcoholServed?: boolean;
    isTakeAwayAvailable?: boolean;
  }
  localeConfiguration: {
    currency: string;
    language: string;
    decimalSeparator: string;
    thousandSeparator: string;
    dateFormat: string;
    timeFormat: string;
    numberOfDecimals: number;
  };
  defaultButtons: {
    showShareButton: boolean;
    showCallButton: boolean;
    showInstagramIcon: boolean;
  }
};

export type Menu = {
  business: Business;
  items: Item[];
};
