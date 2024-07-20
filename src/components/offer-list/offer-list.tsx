import OfferCard from '../../components/offer-card/offer-card';
import {OfferPreview} from '../../types/offer';
import { CitiesName } from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';
import { City } from '../../types/city';


type OfferListProps = {
  offers: OfferPreview[];
  city: City;
  isFavoriteShow :boolean;
}


export function OfferList ({offers,city,isFavoriteShow} : OfferListProps){


  //В данной функции фильтруем отображаемую карточку по городу или по признаку избранное
  //@isFavoriteShow  -тип отображаемой карточки (для списка Favorite )
  const isShowCard = (offerCard: OfferPreview): boolean =>{
    //фильтрация по избранному
    let isShow = isFavoriteShow ? offerCard.isFavorite : true;
    if (isShow){

      if (city.name === CitiesName.All.toString()){
        isShow = true;
      } else{ //фильтрация по городу
        if (city.name === offerCard.city.name){
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
    <>
      {
        offersVisible.map((item) =>

          isFavoriteShow ? (
            <FavoriteCard
              key={item.id}
              offerCard={{...item}}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onOverCard={(_activeCardId) => {
              }}
            />) : (
            <OfferCard
              key={item.id}
              offerCard={{...item}}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onOverCard={(_activeCardId) => {
              }}
            />)
        )

      }
    </>


  );

}
