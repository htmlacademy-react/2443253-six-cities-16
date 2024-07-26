import clsx from 'clsx';
import { useState } from 'react';

type OfferButtonProps = {
  height:string;
  width:string;
  isFavorite:boolean;
  isPreview:boolean;
}

export default function OfferFavoriteButton ({height,width,isFavorite,isPreview}:OfferButtonProps):JSX.Element {

  const [isCurrentFavoriteStatus, setCurrentFavoriteStatus] = useState(isFavorite);

  //Обработчик по клику
  const mouseClickHandler = () => {
    setCurrentFavoriteStatus(!isCurrentFavoriteStatus);
  };

  const classNameButton: string = isPreview ? 'place-card__bookmark-button' : 'offer__bookmark-button';
  const classNameIcon: string = isPreview ? 'place-card__bookmark-icon' : 'offer__bookmark-icon';
  const classNameActive:string = isPreview ? 'place-card__bookmark-button--active' : 'offer__bookmark-button--active';

  return(
    <button className={clsx(classNameButton,{[classNameActive] : isCurrentFavoriteStatus}, 'button')} type="button"
      onClick = {mouseClickHandler}
    >
      <svg className={clsx(classNameIcon)} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isCurrentFavoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );

}

