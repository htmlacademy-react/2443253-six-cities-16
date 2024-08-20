import clsx from 'clsx';
import { useState } from 'react';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { favoritesActions} from '../../store/slices/favorites/favorites-slice';
import { offerActions } from '../../store/slices/offer/offer-slice';
import { offersActions } from '../../store/slices/offers/offers-slice';

type OfferButtonProps = {
  height:string;
  width:string;
  isFavorite:boolean;
  isPreview:boolean;
  offerId:string;

}

export default function OfferFavoriteButton ({height,width,isFavorite,isPreview,offerId}:OfferButtonProps):JSX.Element {

  const [isCurrentFavoriteStatus, setCurrentFavoriteStatus] = useState(isFavorite);


  const {changeFavorites} = useActionCreators(favoritesActions);
  const {updateOffer} = useActionCreators(offerActions);
  const {updateOffers} = useActionCreators(offersActions);
  //Обработчик по клику
  const favoriteStatusClickHandler = () => {
    setCurrentFavoriteStatus(!isCurrentFavoriteStatus);
    //обновим состояние предложений на сервере
    changeFavorites({offerId,status:Number(!isCurrentFavoriteStatus)})
      .unwrap()
      .then(()=>{
        updateOffer(offerId);
        updateOffers(offerId);
      });
  };

  const classNameButton: string = isPreview ? 'place-card__bookmark-button' : 'offer__bookmark-button';
  const classNameIcon: string = isPreview ? 'place-card__bookmark-icon' : 'offer__bookmark-icon';
  const classNameActive:string = isPreview ? 'place-card__bookmark-button--active' : 'offer__bookmark-button--active';

  return(
    <button className={clsx(classNameButton,{[classNameActive] : isCurrentFavoriteStatus}, 'button')} type="button"
      onClick = {favoriteStatusClickHandler}
    >
      <svg className={clsx(classNameIcon)} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isCurrentFavoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );

}

