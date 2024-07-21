import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, CityMap } from '../../const';
import { City } from '../../types/city';
import takeCity from '../../utils';
import { OfferFavoriteList } from '../../components/offer-favorite-list/offer-favorite-list';

type FavoriteProps = {

  offers : OfferPreview[];
}

function FavoritePlacesForCity ({city,offers} : {city :City; offers:OfferPreview[]}){
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link"
            to={`${AppRoute.Main}`}
            state={{ offers : offers, locations : {CityMap}, currentCity : {city}}}
          >
            <span>{city.name}</span>
          </Link>

        </div>
      </div>
      <div className="favorites__places">
        <OfferFavoriteList
          offers ={offers}
        />
      </div>
    </li>
  );

}

export default function FavoritePage({offers}: FavoriteProps): JSX.Element {
  //Массив городов
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));


  return (
    <div className="page">
      <Helmet>
        <title>6 Sities - favorites offers</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cities.map((item) =>
                  (
                    <FavoritePlacesForCity
                      key={item}
                      city = {takeCity(item)}
                      offers={offers}
                    />)

                )
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>

  );

}

