
import {OfferPreview} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';


type OfferFavoriteListProps = {
  offers: OfferPreview[];
}

export function OfferFavoriteList ({offers} : OfferFavoriteListProps){


  //Фильтруем массив карточек признаку избранное
  const offersVisible = offers.filter((offer) => offer.isFavorite);

  return(
    <>
      {
        offersVisible.map((item) =>

          (
            <OfferCard
              key={item.id}
              isFavoriteList
              isNearbyList = {false}
              offerCard={{...item}}
            />
          ))

      }
    </>


  );

}
