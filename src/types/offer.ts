import { City } from './city';
import { Host } from './host';
import { Location } from './location';
import { Review } from './review';

export type Offer = Omit<OfferPreview, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
  reviews :Review[];
};

export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type VariantCardExtraClasses = 'cities__card place-card__image-wrapper' |
'favorites__card favorites__image-wrapper'|
 'near-places__card near-places__image-wrapper';
