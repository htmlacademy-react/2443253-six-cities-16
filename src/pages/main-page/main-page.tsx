
import { Helmet } from 'react-helmet-async';

import {OfferPreview} from '../../types/offer';
import { OfferList } from '../../components/offer-list/offer-list';
import { CitiesName, CityMap } from '../../const';
import { useState } from 'react';
import { City } from '../../types/city';
import takeCity from '../../utils';
import { useLocation } from 'react-router-dom';
import Map from '../../components/map/map';

type MainScreenProps = {
  offers : OfferPreview[];
  locations: typeof CityMap;
  currentCity:City;
}


function MainPage({offers,locations,currentCity}: MainScreenProps): JSX.Element {

  const data = useLocation();

  if (data.state){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    currentCity = data.state.currentCity.city as City;
  }
  currentCity = currentCity ? currentCity : takeCity(CitiesName.Paris);

  //State по выбору города
  const [activeCity, setActiveCity] = useState(currentCity);
  //State по выбору карточки предложения
  const [selectedCardId, setSelectedId] = useState('');


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Sities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(locations).map((city) => (
                <li key={city.name} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#"
                    style = {city.name.toString() === activeCity.name ? {border : '1px solid'} : {border : ''}}
                    onClick = {()=>setActiveCity(city)}
                  >
                    <span>{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.filter((offer)=>offer.city.name === activeCity.name).length} places to stay in {activeCity.name}</b>
              {/* <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex ={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex ={0}>Popular</li>
                  <li className="places__option" tabIndex ={0}>Price: low to high</li>
                  <li className="places__option" tabIndex ={0}>Price: high to low</li>
                  <li className="places__option" tabIndex ={0}>Top rated first</li>
                </ul>
              </form> */}
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers ={offers} city={activeCity}
                  onOverCard={(activeCardId) => {
                    setSelectedId(activeCardId);
                  }}
                />
              </div>


            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  activeCity={activeCity}
                  selectedCardId={selectedCardId}
                  extraHeight = {'100%'}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;


