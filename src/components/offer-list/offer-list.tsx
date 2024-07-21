import OfferCard from '../../components/offer-card/offer-card';
import {OfferPreview} from '../../types/offer';
import { City } from '../../types/city';


type OfferListProps = {
  offers: OfferPreview[];
  city: City;
  onOverCard?: (cardId : string) => void;
}


export function OfferList ({offers,city,onOverCard} : OfferListProps){


  //Фильтруем массив карточек
  const offersVisible = offers.filter((offer) => offer.city.name === city.name);

  return(
    <>
      {
        offersVisible.map((item) =>

          (
            <OfferCard
              key={item.id}
              offerCard={{...item}}
              isFavoriteList = {false}
              onOverCard={(activeCardId) => {
                if(onOverCard) {
                  onOverCard(activeCardId);
                }
              }}
            />)
        )

      }
    </>


  );

}
