import {OfferPreview} from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OFFERS_DETAIL } from '../../mocks/offers';
import Premium from '../premium/premium';
import OfferFavoriteButton from '../offer-favorite-button/offer-favorite-button';
import clsx from 'clsx';


export type OfferCardProps = {
  offerCard: OfferPreview;
  isFavoriteList:boolean;
  isNearbyList:boolean;
  onOverCard?: (cardId : string) => void;
}


export default function OfferCard (props :OfferCardProps) :JSX.Element{
  const {offerCard,isFavoriteList,isNearbyList,onOverCard} = props;
  const {id,title, type, price, isFavorite,isPremium,rating,previewImage} = offerCard;
  const offerId:string = id;


  //Обработчик по наведению
  const mouseOverHandler = () => {
    if (onOverCard){
      onOverCard(id);
    }
  };
  return(

    <article className={clsx((isFavoriteList && !isNearbyList) && 'favorites__card place-card',(!isFavoriteList && !isNearbyList) && 'cities__card place-card',
      isNearbyList && 'near-places__card')}
    //изменяем state состояние при наведении
    onMouseOver= {mouseOverHandler}
    >
      {!isNearbyList && <Premium isPremium ={isPremium} typeMark = {'place-card__mark'}/>}

      <div className= {clsx((isFavoriteList && !isNearbyList) && 'favorites__image-wrapper',
        (!isFavoriteList && !isNearbyList) && 'cities__image-wrapper', 'place-card__image-wrapper', isNearbyList && 'near-places__image-wrapper')}
      >

        <Link
          to={`${AppRoute.Offer}/:${offerId} `}
          state={{ offerCard: OFFERS_DETAIL[0] }}
        >
          <img className="place-card__image" src={`${previewImage}` } width={clsx((!isFavoriteList || isNearbyList) && '260', (isFavoriteList || !isNearbyList) && '150')}
            height={clsx((!isFavoriteList || isNearbyList) && '200',(isFavoriteList || !isNearbyList) && '110')} alt="Place image"
          />
        </Link>
      </div>
      <div className= {clsx((isFavoriteList && !isNearbyList) && 'favorites__card-info','place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <OfferFavoriteButton width={18} height={19} isFavorite={isFavorite} isPreview/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.Offer}/:${offerId} `}
            state={{ offerCard: OFFERS_DETAIL[0] }} //для отображения на карте
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

