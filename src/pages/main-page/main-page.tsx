
import { Helmet } from 'react-helmet-async';

import { OfferList } from '../../components/offer-list/offer-list';
import {sortOffers, VariantCard } from '../../const';
import { useEffect, useState } from 'react';

import takeCity from '../../utils/utils';

import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';

import {offersActions, offersSelectors } from '../../store/slices/offers/offers-slice';
import { useAppSelector } from '../../store/hooks/useAppSelector';

import { Locations } from '../../components/locations/locations';
import SortVariantSelector from '../../components/sort-variants/sort-variants';
import clsx from 'clsx';
import MainPageEmpty from '../main-empty-page/main-empty-page';
import Spinner from '../../components/spinner/spinner';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { RequestStatus } from '../../services/api';


export default function MainPage(): JSX.Element {


  const currentCity = useAppSelector(offersSelectors.city);
  const currentSortVariant = useAppSelector(offersSelectors.sortVariant);
  const offers = useAppSelector(offersSelectors.offers);
  const offersStatus = useAppSelector(offersSelectors.requestStatus);
  const activeCardId = useAppSelector(offersSelectors.activeId);
  const { fetchOffersAction } = useActionCreators(offersActions);

  //State по выбору карточки предложения для подсветки мест на карте
  const [selectedCardId, setSelectedId] = useState('');

  useEffect(() => {
    setSelectedId(activeCardId);
  },[activeCardId]);

  //Получаем список предложений
  useEffect(() => {
    fetchOffersAction();
  },[]);

  //Спиннер
  if (offersStatus === RequestStatus.Loading || (!offers && !currentCity && !currentSortVariant)) {
    return(
      <Spinner/>
    );
  }

  //Фильтруем предложения по текущему городу
  let offersByCity = offers.filter((offer) => offer.city.name === currentCity) ;
  //Отсортируем по текущему варианту сортировки
  const sortedOffers = sortOffers.find((variant) => variant.sortVariant === currentSortVariant)?.sort(offersByCity);
  if(sortedOffers) {
    offersByCity = sortedOffers;
  }

  //Компонент
  return (
    <div className={clsx('page page--gray page--main',offersByCity.length === 0 && 'page__main--index-empty')} >
      <Helmet>
        <title>6 Sities</title>

      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations/>

        <div className="cities">
          {offersByCity.length === 0 ?
            <MainPageEmpty/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} {offersByCity.length > 1 ? 'places' : 'place'} to stay in {currentCity}</b>
                <SortVariantSelector />

                <OfferList
                  offers = {offersByCity}
                  extraClassName='cities__places-list tabs__content'
                >
                  {(dataCard) => (
                    <OfferCard
                      key={dataCard.id}
                      offerCard={dataCard}
                      variant={VariantCard.MainOffer}
                    />
                  )}
                </OfferList>


              </section>
              <div className="cities__right-section">
                <Map
                  offers={offers}
                  activeCity={takeCity(currentCity)}
                  selectedCardId={selectedCardId}
                  extraHeight = {'100%'}
                  extraClass='cities__map'
                />
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}
