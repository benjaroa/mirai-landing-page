import type { Business, Menu } from './menu.type';
import { GeneralOptions } from './menu.type';

const mirai: Business = {
  name: 'Mirai Food Lab',
  openingHours: {
    friday: ['12:30', '16:30'],
    saturday: ['12:30', '17:30'],
    sunday: ['12:30', '17:30'],
  },
  contactInformation: {
    phone: '+56 9214 4516',
    whatsapp: '+56 9214 4516',
    email: 'hola@miraifoodlab.cl',
    website: 'https://www.miraifoodlab.cl',
    socialMedia: {
      instagram: 'miraifoodlab',
      tiktok: 'miraifoodlab',
      googleMaps: 'miraifoodlab',
    }
  },
  address: {
    street: 'Franklin',
    number: '741',
    district: 'Santiago',
    city: 'Santiago',
    postalCode: '8361167',
    country: 'Chile'
  },
  location: {
    latitude: -33.4728148,
    longitude: 70.645383,
  },
  properties: {
    isPetFriendly: true,
    hasSmokingArea: true,
    hasWifi: true,
    isAlcoholServed: true,
    hasParking: false,
    isTakeAwayAvailable: true,
  },
  localeConfiguration: {
    currency: 'CLP',
    currencySymbol: '$',
    language: 'es',
    decimalSeparator: ',',
    thousandSeparator: '.',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'hh:mm:ss',
    numberOfDecimals: 0
  },
  ctaButtons: {
    showShareButton: true,
    showCallButton: true,
    showInstagramIcon: true,
  }
}

const options: GeneralOptions = {
  showToTopButton: true,
  style: "minimal",
  colors: {
    primary: "#string",
    secondary: "#string",
    accent: "#string",
    background: "#string",
    text: "#string",
  },
  typography: {
    fontFamily: "string",
    fontSize: "string",
    fontWeight: "string",
    lineHeight: "string",
  },
  isDarkModeActive: false
};

const menu: Menu = {
  business: mirai,
  options,
  bricks: [
    {
      name: 'Home',
      type: 'heading',
      description: '',
      children: {
        es: {
          name: 'Inicio',
          description: ''
        }
      }
    },
  ]
}

export const MenuComponent = () => (
  <div className="container">
    <h1>Menu</h1>
    <pre>{JSON.stringify(menu,null,2)}</pre>
  </div>
)