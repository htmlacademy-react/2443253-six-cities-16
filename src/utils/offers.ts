import { OfferPreview } from '../types/offer';

export default function getFavoriteOffers(offers:OfferPreview[]) {
  return offers.filter((offer) => offer.isFavorite);
}

