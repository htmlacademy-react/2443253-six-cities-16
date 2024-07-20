import { useState } from 'react';

type OfferButtonProps = {
  height:number;
  width:number;
  isFavorite:boolean;
  isPreview:boolean;
}

export default function OfferFavoriteButton ({height,width,isFavorite,isPreview}:OfferButtonProps):JSX.Element {

  // eslint-disable-next-line prefer-const
  let [isCurrentFavoriteStatus, setCurrentFavoriteStatus] = useState(isFavorite);

  //Обработчик по клику
  const mouseClickHandler = () => {
    setCurrentFavoriteStatus(isCurrentFavoriteStatus = !isCurrentFavoriteStatus);
  };

  const classNamePrefix: string = isPreview ? 'place-card' : 'offer';
  const classNameActive = isCurrentFavoriteStatus ? `${classNamePrefix}__bookmark-button--active` : '';

  return(
    <button className={`${classNamePrefix}__bookmark-button ${classNameActive} button`} type="button"
      onClick = {mouseClickHandler}
    >
      <svg className={`${classNamePrefix}__bookmark-icon`} width={`${width}`} height={`${height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isCurrentFavoriteStatus ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );

}

