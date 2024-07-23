import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Offer, OfferPreview} from '../../types/offer';
import Premium from '../../components/premium/premium';
import { newUser } from '../../mocks/offers';
import OfferFavoriteButton from '../../components/offer-favorite-button/offer-favorite-button';
import { AuthorizationStatus } from '../../const';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NewReview from '../../components/new-review/new-review';
import Map from '../../components/map/map';
import { OfferNearbyList } from '../../components/offer-nearby-list/offer-nearby-list';
import { useState } from 'react';

type OfferProps ={
  offers : Offer[];
  offersNearby : OfferPreview[];
  authStatus:AuthorizationStatus;
}

function OfferPage({offers,offersNearby,authStatus} : OfferProps): JSX.Element {

  //Получим ID карточки места через useParams()
  const {offerId} = useParams();

  //State по выбору карточки предложения неподалеку для отображения на карте
  const [selectedNearbyCardId, setSelectedNearbyId] = useState('');

  // eslint-disable-next-line no-console
  console.log(offerId);

  const offerCard = offers[0];
  const {city,title,images,isPremium,isFavorite,rating,type,bedrooms,maxAdults,goods,host,description,price,reviews} = offerCard;

  return (
    <div className="page">
      <Helmet>
        <title>6 Sities - offers</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              { images.map((item) =>
                (
                  <div key ={item} className="offer__image-wrapper">
                    <img className="offer__image" src={item} alt="Photo studio"/>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <Premium isPremium ={isPremium} typeMark = {'offer__mark'}/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <OfferFavoriteButton width={31} height={33} isFavorite = {isFavorite} isPreview ={false}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? 'Adults' : 'Adult'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  { goods.map((item) =>
                    (
                      <li key={item} className="offer__inside-item">
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className = {`offer__avatar-wrapper ${host.isPro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

                <ReviewsList reviews = {reviews}/>

                {authStatus === AuthorizationStatus.Auth &&
                <NewReview
                  onReviewSubmit={(newReview) => {
                    //Здесь добавим новый отзыв для текущего пользователя в state страницы выбранного места: пока не реализовано
                    reviews.push({id:Math.random(), user:newUser,rating:newReview.rating,review:newReview.review,date:''});
                    // eslint-disable-next-line no-console
                    //console.log(reviews);
                  }}
                />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            {/* Карта предложений неподалеку */}
            <Map
              offers={offersNearby}
              activeCity={city}
              selectedCardId={selectedNearbyCardId}
              extraHeight = {'100%'}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OfferNearbyList offersNearby ={offersNearby}
                onOverCard={(cardId) => setSelectedNearbyId(cardId)}
              />

            </div>
          </section>
        </div>
      </main>
    </div>


  );

}
export default OfferPage;
