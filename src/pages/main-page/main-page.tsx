
import { Helmet } from 'react-helmet-async';

import { OfferList } from '../../components/offer-list/offer-list';
import { sortOffers, SortVariants, VariantCard } from '../../const';
import { useState } from 'react';

import takeCity from '../../utils';

import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';

import { offerSelectors } from '../../store/slices/offer-slice';
import { useAppSelector } from '../../store/hooks/useAppSelector';

import { Locations } from '../../components/locations/locations';
import SortVariantSelector from '../../components/sort-variants/sort-variants';


export default function MainPage(): JSX.Element {

  const currentCity = useAppSelector(offerSelectors.city);
  const currentSortVariant = useAppSelector(offerSelectors.sortVariant);

  const offers = useAppSelector(offerSelectors.offers);
  let offersByCity = offers.filter((offer) => offer.city.name === currentCity) ;
  const sortedOffers = sortOffers.find((variant) => variant.sortVariant === currentSortVariant as SortVariants)?.sort(offersByCity);
  if(sortedOffers) {
    offersByCity = sortedOffers;
  }

  //State по выбору карточки предложения
  const [selectedCardId, setSelectedId] = useState('');

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Sities</title>

      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations/>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
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
                    onOverCard={(activeCardId) => {
                      setSelectedId(activeCardId);
                    }}
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
          </div>
        </div>
      </main>
    </div>
  );
}
