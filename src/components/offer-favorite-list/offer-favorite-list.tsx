
import { VariantCard } from '../../const';
import {OfferPreview} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import getFavoriteOffers from '../../utils/offers';


type OfferFavoriteListProps = {
  offers: OfferPreview[];
}

export function OfferFavoriteList ({offers} : OfferFavoriteListProps){

  //Фильтруем массив карточек признаку избранное
  const offersVisibleForCity = getFavoriteOffers(offers);


  return(
    <>
      {
        offersVisibleForCity.map((item) =>

          (
            <OfferCard
              key={item.id}
              variant={VariantCard.FavoriteOffer}
              offerCard={{...item}}
            />
          ))

      }
    </>


  );

}
