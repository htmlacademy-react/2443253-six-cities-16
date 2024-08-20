import { Helmet } from 'react-helmet-async';
import Premium from '../../components/premium/premium';
import OfferFavoriteButton from '../../components/offer-favorite-button/offer-favorite-button';
import { BookmarkSizeMap, VariantCard } from '../../const';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NewReview from '../../components/new-review/new-review';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';
import { OfferList } from '../../components/offer-list/offer-list';
import { useAuth } from '../../utils/use-auth';
import { useParams } from 'react-router-dom';
import { offerActions, offerSelectors } from '../../store/slices/offer/offer-slice';
import { useAppSelector } from '../../store/hooks/useAppSelector';

import { reviewsActions, reviewsSelectors } from '../../store/slices/reviews/reviews-slice';
import Spinner from '../../components/spinner/spinner';
import { offersSelectors } from '../../store/slices/offers/offers-slice';
import { RequestStatus } from '../../services/api';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import NotFoundPage from '../not-found-page/not-found-page';


function OfferPage(): JSX.Element {
  //Получим ID карточки места через useParams()
  const {offerId} = useParams();
  const isAuth = useAuth();
  const {fetchReviews} = useActionCreators(reviewsActions);
  const {fetchOffer,fetchNearBy} = useActionCreators(offerActions);
  useEffect(() => {
    //Получим данные о выбранном предложении, предложениях неподалеку и отзывах
    Promise.all([fetchOffer(offerId as string),
      fetchNearBy(offerId as string),
      fetchReviews(offerId as string)]);
  }, [fetchOffer,fetchNearBy,fetchReviews,offerId]);

  //State по выбору карточки предложения неподалеку для отображения на карте
  const [selectedNearbyCardId, setSelectedNearbyId] = useState('');

  const offerCard = useAppSelector(offerSelectors.offer);
  const offersNearby = useAppSelector(offerSelectors.nearbyOffers);
  const offerReviews = useAppSelector(reviewsSelectors.reviews);
  const offerStatus = useAppSelector(offerSelectors.requestStatus);
  const activeCardId = useAppSelector(offersSelectors.activeId);

  useEffect(() => {
    setSelectedNearbyId(activeCardId);
  },[activeCardId]);


  if (offerStatus === RequestStatus.Loading) {
    return(<Spinner/>);
  }

  if (offerStatus === RequestStatus.Failed || !offerCard) {
    return(<NotFoundPage/>);
  }

  const {city,title,images,isPremium,isFavorite,rating,type,bedrooms,maxAdults,goods,host,description,price} = offerCard;

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
                <OfferFavoriteButton width={BookmarkSizeMap.large.width} height={BookmarkSizeMap.large.height}
                  isFavorite = {isFavorite} isPreview ={false}
                  offerId={offerId as string}
                />
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>

                <ReviewsList reviews = {offerReviews}/>

                {isAuth &&
                <NewReview offerId={offerId as string}/>}
              </section>
            </div>
          </div>
          {/* Карта*/}
          <Map
            offers={offersNearby}
            activeCity={city}
            selectedCardId={selectedNearbyCardId}
            extraHeight = '100%'
            extraClass='offer__map'
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <OfferList
              offers ={offersNearby}
              extraClassName='near-places__list'
            >
              {(dataCard) => (
                <OfferCard
                  key={dataCard.id}
                  offerCard={dataCard}
                  variant={VariantCard.NearbyOffer}
                />
              )}
            </OfferList>


          </section>
        </div>
      </main>
    </div>


  );

}
export default OfferPage;


