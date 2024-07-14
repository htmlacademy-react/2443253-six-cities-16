import OfferCard from '../../components/offer-card/offer-card';
import {OfferPreview} from '../../types/offer';
import { CitiesName } from '../../const';


type OfferListProps = {
  offers: OfferPreview[];
  city: string;
  isFavoriteShow :boolean;
}


export function OfferList ({offers,city,isFavoriteShow} : OfferListProps){


  //В данной функции фильтруем отображаемую карточку по городу или по признаку избранное
  const isShowCard = (offerCard: OfferPreview): boolean =>{
    //фильтрация по избранному
    let isShow = isFavoriteShow ? offerCard.isFavorite : true;
    if (isShow){

      if (city === CitiesName.All.toString()){
        isShow = true;
      } else{ //фильтрация по городу
        if (city === offerCard.city.name){
          isShow = true;
        } else{
          isShow = false;
        }
      }
    }
    return isShow;
  };
  //Фильтруем массив карточек
  const offersVisible = offers.filter((offer) => isShowCard(offer));

  return(
    <div className="cities__places-list places__list tabs__content">
      {
        offersVisible.map((item) =>
          (
            <OfferCard
              key={item.id}
              offerCard={{...item}}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onOverCard={(_activeCardId) => {
              }}
            />)

        )
      }

    </div>


  );

}
