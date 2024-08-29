import { Icon } from 'leaflet';
import { OfferPreview } from './types/offer';
import { Review } from './types/review';
import { TSizeMap } from './types/size';
import UrlMarkerDefault from './components/map/assets/pin.svg';
import UrlMarkerCurrent from './components/map/assets/pin-active.svg';


export enum AppRoute {
  Login = '/login',
  Offer = '/offer',
  OfferId = '/offer/:offerId',
  Favorites = '/favorites',
  Main = '/',
  Favorite = 'Favorite',
  NotFound = '*',

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


export const ratings = [
  { stars: 5, title: 'perfect' },
  { stars: 4, title: 'good' },
  { stars: 3, title: 'not bad' },
  { stars: 2, title: 'badly' },
  { stars: 1, title: 'terribly' },
];
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


export enum SortVariants {
  Popular = 'Popular',
  PriceLowToHi = 'Price: low to high',
  PriceHiToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
export const DEFAULT_SORT_VARIANT = SortVariants.Popular;

export const sortOffers = [
  {sortVariant: SortVariants.Popular, sort:(offers : OfferPreview[]) => offers},
  {sortVariant: SortVariants.PriceHiToLow, sort: (offers : OfferPreview[]) => offers.sort((a, b) => b.price - a.price)},
  {sortVariant: SortVariants.PriceLowToHi, sort: (offers : OfferPreview[]) => offers.sort((a, b) => a.price - b.price)},
  {sortVariant: SortVariants.TopRatedFirst, sort: (offers : OfferPreview[]) => offers.sort((a, b) => b.rating - a.rating)},
];
export const sortReviews = (reviews : Review[]) => reviews.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));


export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN = 'six-cities-token';

export enum DataPathUrl {
  Offers = '/offers',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}


export const textError = {
  textErrorValidationForm: 'Email or password is incorrect',
  textSuccessAuthorization: 'You have successfully logged in',
  textFailedAuthorization: 'An error occurred during authorization',
  textErrorReviewValidation: 'Review is not valid. Its length should be between 50 and 300 symbols',
};


export const DefaultCustomIcon:Icon = new Icon({
  iconUrl: UrlMarkerDefault,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});


export const CurrentCustomIcon:Icon = new Icon({
  iconUrl: UrlMarkerCurrent,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const MAX_REVIEWS_VIEW = 10;
export const MAX_NEARBY_VIEW = 3;
export const MAX_OFFER_PHOTOS_VIEW = 6;
