import { OfferPreview } from './types/offer';
import { TSizeMap } from './types/size';


export enum AppRoute {
  Login = '/login',
  Offer = '/offer',
  OfferId = '/offer/:offerId',
  Favorites = '/favorites',
  Main = '/',
  Favorite = 'Favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CitiesName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CityMap = {
  Paris: { name: CitiesName.Paris, location: { latitude: 48.8566, longitude: 2.3522, zoom: 10} },
  Cologne: { name: CitiesName.Cologne, location: { latitude: 50.935173, longitude: 6.953101, zoom: 10 }},
  Brussels: { name: CitiesName.Brussels, location: { latitude: 50.8476, longitude: 4.3572, zoom: 10 } },
  Amsterdam: { name: CitiesName.Amsterdam, location: { latitude: 52.3676, longitude: 4.9041, zoom: 10 } },
  Hamburg: { name: CitiesName.Hamburg, location: { latitude: 53.5488, longitude: 9.9872, zoom: 10 } },
  Dusseldorf: { name: CitiesName.Dusseldorf, location: { latitude: 51.2277, longitude: 6.7735, zoom: 10 } },
} as const;
export const DEFAULT_CITY = CitiesName.Paris;

export const BookmarkSizeMap: TSizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
} as const;

export const ImageSizeMap: TSizeMap = {
  small: { width: '150', height: '110'},
  large: { width: '260', height: '200'},
} as const;


export enum LayOutClasses {
  PageMain = 'page--main',
  PageFavoritesEmpty = 'page--favorites-empty',
  PageGray = 'page--gray',
  PageLogin = 'page--login',
}

export enum VariantCard {
  MainOffer = 'MainOffer',
  FavoriteOffer ='FavoriteOffer',
  NearbyOffer ='NearbyOffer',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export enum SortVariants {
  Popular = 'Popular',
  PriceLowToHi = 'Price low to hi',
  PriceHiToLow = 'Price hi to low',
  TopRatedFirst = 'Top rated first',
}
export const DEFAULT_SORT_VARIANT = SortVariants.Popular;

export const sortOffers = [
  {sortVariant: SortVariants.Popular, sort:(offers : OfferPreview[]) => offers},
  {sortVariant: SortVariants.PriceHiToLow, sort: (offers : OfferPreview[]) => offers.sort((a, b) => b.price - a.price)},
  {sortVariant: SortVariants.PriceLowToHi, sort: (offers : OfferPreview[]) => offers.sort((a, b) => a.price - b.price)},
  {sortVariant: SortVariants.TopRatedFirst, sort: (offers : OfferPreview[]) => offers.sort((a, b) => b.rating - a.rating)},
];

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const HARDCORE_TOKEN = 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

export enum DATA_PATH_URL {
  Offers = '/offers',
}

export const OFFERS_SLICE_NAME = 'offers';
