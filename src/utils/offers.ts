import { OfferPreview } from '../types/offer';

export default function getFavoriteOffers(offers:OfferPreview[]) {
  return offers.filter((offer) => offer.isFavorite);
}

export function getRatingWidth (rating: number) {
  return `${Math.round(rating / 0.05 / 20) * 20 }%`;
}

///Вернуть строку с первым символом в верхнем регистре
export const capitalize = (line:string) => line && line[0].toUpperCase() + line.slice(1);

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(date));
}
