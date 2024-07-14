import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import { OfferList } from '../../components/offer-list/offer-list';

type FavoriteProps = {

  offers : OfferPreview[];
}

function FavoritePlacesForCity ({city,offers} : {city :string; offers:OfferPreview[]}){
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <OfferList
          offers ={offers} city={city} isFavoriteShow
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
                      city= {item}
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

