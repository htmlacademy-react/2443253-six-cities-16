
import { Helmet } from 'react-helmet-async';

import {OfferPreview} from '../../types/offer';
import { OfferList } from '../../components/offer-list/offer-list';
import { CitiesName, CityMap } from '../../const';
import { useState } from 'react';

type MainScreenProps = {
  offers : OfferPreview[];
  locations: typeof CityMap;
}

function MainPage({offers,locations}: MainScreenProps): JSX.Element {

  //State по выбору города
  const [activeCity, setActiveCity] = useState(CitiesName.Amsterdam.toString());

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
                    style = {city.name.toString() === activeCity ? {border : '1px solid'} : {border : ''}}
                    onClick = {()=>setActiveCity(city.name)}
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
              <b className="places__found">{offers.filter((offer)=>offer.city.name === activeCity).length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
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
              </form>
              <OfferList offers ={offers} city={activeCity} isFavoriteShow ={false}/>


            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;


