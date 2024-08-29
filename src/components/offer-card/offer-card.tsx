import {OfferPreview} from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, BookmarkSizeMap, VariantCard} from '../../const';

import Premium from '../premium/premium';
import OfferFavoriteButton from '../offer-favorite-button/offer-favorite-button';
import clsx from 'clsx';
import { getCardClass, getCardSize } from '../../utils/utils';
import { useActionCreators } from '../../store/hooks/useActionCreators';

import { offersActions } from '../../store/slices/offers/offers-slice';
import { capitalize, getRatingWidth } from '../../utils/offers';


export type OfferCardProps = {
  offerCard: OfferPreview;
  variant : string;
}

export default function OfferCard (props :OfferCardProps) :JSX.Element{
  const {offerCard,variant} = props;
  const {id,title, type, price, isFavorite,isPremium,rating,previewImage} = offerCard;
  const offerId:string = id;

  const {setActiveId} = useActionCreators(offersActions);
  //Обработчики по наведению
  const handleMouseOver = () => {
    setActiveId(id);
  };
  const handleMouseLeave = () => {
    setActiveId('');
  };

  return(

    <article className={clsx(getCardClass(variant).split(' ')[0], 'place-card')}
    //изменяем state состояние при наведении
      onMouseOver= {handleMouseOver}
      onMouseLeave= {handleMouseLeave}
    >
      {(variant !== VariantCard.NearbyOffer.toString()) && <Premium isPremium ={isPremium} typeMark = {'place-card__mark'}/>}

      <div className= {clsx(getCardClass(variant).split(' ')[1],'cities__image-wrapper')}>

        <Link
          to={`${AppRoute.Offer}/${offerId} `}
        >
          <img className="place-card__image" src={`${previewImage}` } width={getCardSize(variant).width}
            height={getCardSize(variant).height} alt="Place image"
          />
        </Link>
      </div>
      <div className= {clsx((variant === VariantCard.FavoriteOffer.toString()) && 'favorites__card-info','place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <OfferFavoriteButton width={BookmarkSizeMap.small.width} height={BookmarkSizeMap.small.height}
            isFavorite={isFavorite} isPreview
            offerId={offerId}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${AppRoute.Offer}/${offerId} `}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>

  );
}

