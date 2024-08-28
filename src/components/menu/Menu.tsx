import type { Business, Menu } from './menu.type';

const mirai: Business = {
  name: 'Mirai Food Lab',
  openingHours: {
    friday: ['12:15', '16:30'],
    saturday: ['12:15', '17:30'],
    sunday: ['12:15', '17:30'],
  },
  contactInformation: {
    phone: '+55 11 99999-9999',
    whatsapp: '+55 11 99999-9999',
    email: 'hola@miraifoodlab.cl',
    website: 'https://www.miraifoodlab.cl',
    socialMedia: {
      instagram: '@miraifoodlab',
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
  properties: {
    isPetFriendly: true,
    hasSmokingArea: true,
    hasWifi: true,
    isAlcoholServed: true,
    isTakeAwayAvailable: true,
  },
  localeConfiguration: {
    currency: 'CLP',
    language: 'es',
    decimalSeparator: ',',
    thousandSeparator: '.',
    dateFormat: 'YYYY/MM/DD',
    timeFormat: 'hh:mm:ss',
    numberOfDecimals: 0
  },
  defaultButtons: {
    showShareButton: true,
    showCallButton: true,
    showInstagramIcon: true,
  }
}

const menu: Menu = {
  business: mirai,
  items: [
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