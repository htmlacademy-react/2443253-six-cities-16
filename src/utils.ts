import { CityMap, ImageSizeMap, VariantCard } from './const';
import { City } from './types/city';
import { VariantCardExtraClasses } from './types/offer';

export default function takeCity (city:string):City {
  switch (city) {
    case CityMap.Amsterdam.name: return CityMap.Amsterdam;
    case CityMap.Brussels.name: return CityMap.Brussels;
    case CityMap.Cologne.name: return CityMap.Cologne;
    case CityMap.Dusseldorf.name: return CityMap.Dusseldorf;
    case CityMap.Hamburg.name: return CityMap.Hamburg;
    case CityMap.Paris.name: return CityMap.Paris;
    default : return CityMap.Paris;
  }
}

//Классы для OfferCard
export function getCardClass(variant : string):VariantCardExtraClasses {
  switch (variant){
    case VariantCard.MainOffer: return 'cities__card place-card__image-wrapper';
    case VariantCard.FavoriteOffer: return 'favorites__card favorites__image-wrapper';
    case VariantCard.NearbyOffer: return 'near-places__card near-places__image-wrapper';
    default : return 'cities__card place-card__image-wrapper';
  }
}
export function getCardSize(variant : string):typeof ImageSizeMap.large {
  switch (variant){
    case VariantCard.MainOffer: return ImageSizeMap.large;
    case VariantCard.FavoriteOffer: return ImageSizeMap.small;
    case VariantCard.NearbyOffer: return ImageSizeMap.large;
    default : return ImageSizeMap.large;
  }
}
