import { useState } from 'react';
import { OfferCardProps } from '../offer-card/offer-card';
import OfferFavoriteButton from '../offer-favorite-button/offer-favorite-button';
import Premium from '../premium/premium';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OFFERS_DETAIL } from '../../mocks/offers';


export default function FavoriteCard (props : OfferCardProps) :JSX.Element{
  const {offerCard,onOverCard} = props;
  const {id,title, type, price, isPremium,rating,previewImage} = offerCard;
  const offerId : string = id;

  //State по наведению
  const [activeCardId, setActiveCard] = useState('');


  //Обработчик по наведению
  const mouseOverHandler = () => {
    setActiveCard(id);
    onOverCard(activeCardId);
  };


  return(
    <article className="favorites__card place-card"
      onMouseOver= {mouseOverHandler}
    >
      <Premium isPremium ={isPremium} typeMark = {'place-card__mark'}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link
          to={`${AppRoute.Offer}/:${offerId} `}
          state={{ offerCard: OFFERS_DETAIL[0] }}
        >
          <img className="place-card__image" src={`${previewImage}` } width='150' height='110' alt="Place image"/>
        </Link>

      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferFavoriteButton width={18} height={19} isFavorite isPreview/>
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
            state={{ offerCard: OFFERS_DETAIL[0] }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

