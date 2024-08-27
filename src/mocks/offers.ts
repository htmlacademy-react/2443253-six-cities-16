import { CitiesName } from '../const';
import { Offer, OfferPreview } from '../types/offer';
import { User } from '../types/user';

//Моки для тестов
export const mockOfferId : string = 'a806029d-a113-4c68-9ce6-c3c249c6ab78';

export const mockOffersPreview: OfferPreview[] = [
  {
    id: 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 709,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: CitiesName.Amsterdam,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.4,
  },
  {
    id: 'a806029d-a113-4c68-9ce6-c3c249c6ab78',
    title: 'Perfectly located Castro',
    type: 'apartment',
    price: 166,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: CitiesName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.843610000000005,
      longitude: 2.338499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.2,
  },
  {
    id: '5c8b793f-7651-4d77-b98b-7baeffc7f3a0',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 595,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: CitiesName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.84461,
      longitude: 2.374499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.5,
  },
  {
    id: 'd13299e4-f3e8-4390-b4e0-f056e7f2186b',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 443,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
  },
  {
    id: '65164a5f-999b-4bd9-94d6-64f0a1a91c21',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 481,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.2,
  },
  {
    id: '2dfef0dc-f0b0-4715-9fda-117ab822d568',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 188,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
  },
  {
    id: '08fcb9b3-ea59-4e00-bc1a-4cbf5d71199f',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 219,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
  },
  {
    id: '3c7a8d75-f9e7-4c18-a6b2-ae0d5549b77e',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 220,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7,
  },
  {
    id: 'f9a4bbbe-cdb5-4784-b3df-a7fe585bd6b2',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 383,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.941361,
      longitude: 6.956974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '081b071f-bf9d-4bd4-b500-129ae2608ed7',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 679,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.916361,
      longitude: 6.944974,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
  },
  {
    id: '9c64de8d-d97f-44b0-9acc-c9a7dd35a0de',
    title: 'The house among olive ',
    type: 'hotel',
    price: 362,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.5,
  },
  {
    id: '07071577-5672-4eb8-9573-105b5b50de50',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 174,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.913361,
      longitude: 6.9509739999999995,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.8,
  },
  {
    id: '6691bcd2-2288-4946-a596-0fc5d10dfaa8',
    title: 'The house among olive ',
    type: 'room',
    price: 246,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: CitiesName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.930361,
      longitude: 6.937974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },];
export const OFFERS_DETAIL: Offer[] = [{
  id: 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
  title: 'Nice, cozy, warm big bed apartment',
  //Detail+
  description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  type: 'house',
  price: 709,
  //Detail+
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/8.jpg'
  ],
  city: {
    name: CitiesName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16
  },
  //Detail+
  goods: [
    'Towels',
    'Cable TV',
    'Laptop friendly workspace',
    'Baby seat',
    'Heating',
    'Kitchen',
    'Coffee machine'
  ],
  //Detail+
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
  },
  isPremium: true,
  isFavorite: false,
  rating: 2.4,
  //Detail+
  bedrooms: 5,
  maxAdults: 7,
  reviews:[
    {
      id:'1',
      user : {name: 'Max', avatarUrl:'img/avatar-max.jpg',isPro:false},
      rating : 4,
      comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      date: 'May 2020'
    },
    {
      id:'1',
      user : {name: 'Diman', avatarUrl:'img/avatar-max.jpg',isPro:false},
      rating : 5,
      comment: 'Nice place',
      date: 'May 2024'
    }
  ]
}];

export const newUser: User = {
  id: Math.random(),
  name : 'Дима',
  email : 'Diman@gmail.com',
  token: '',
  avatarUrl:'',
  isPro:false

};


export const OFFERS_NEARBY: OfferPreview[] = [
  {
    id: '74ca1674-145a-4f32-872b-0cb76db0926c',
    title: 'House in countryside',
    type: 'room',
    price: 145,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: CitiesName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
  },
  {
    id: 'ffb99d6b-6767-4150-8327-423581c9e2ac',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 355,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: CitiesName.Paris,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
  },
];
