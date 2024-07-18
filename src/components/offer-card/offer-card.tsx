import {OfferPreview} from '../../types/offer';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OFFER_DETAIL } from '../../mocks/offers';
import Premium from '../premium/premium';


type OfferCardProps = {
  offerCard: OfferPreview;
  onOverCard: (cardId : string) => void;
}


function OfferCard (props :OfferCardProps) :JSX.Element{
  const {offerCard,onOverCard} = props;
  const {id,title, type, price, isFavorite,isPremium,rating,previewImage} = offerCard;


  //State по наведению
  const [activeCardId, setActiveCard] = useState('');

  //Обработчик по наведению
  const mouseOverHandler = () => {
    setActiveCard(id);
    onOverCard(activeCardId);
  };


  return(

    <article className="cities__card place-card"
    //изменяем state состояние при наведении
      onMouseOver= {mouseOverHandler}
    >
      <Premium isPremium ={isPremium} typeMark = {'place-card__mark'}/>

      <div className="cities__image-wrapper place-card__image-wrapper">

        <a href="#">
          <img className="place-card__image" src={`${previewImage}` } width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={AppRoute.Offer}
            state={{ offerCard: OFFER_DETAIL }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}
export default OfferCard;
