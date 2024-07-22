import {OfferPreview} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';


type OfferNearbyListProps = {
  offersNearby: OfferPreview[];
  onOverCard?: (cardId : string) => void;
}

export function OfferNearbyList ({offersNearby,onOverCard} : OfferNearbyListProps){


  return(
    <>
      {
        offersNearby.map((item) =>

          (

            <OfferCard
              key={item.id}
              isFavoriteList = {false}
              isNearbyList
              offerCard={{...item}}
              onOverCard={(activeCardId) => {
                if(onOverCard) {
                  onOverCard(activeCardId);
                }
              }}

            />
          ))

      }
    </>


  );

}
