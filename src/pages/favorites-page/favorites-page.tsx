import { Helmet } from 'react-helmet-async';
import { OfferPreview } from '../../types/offer';
import { Link, useSearchParams } from 'react-router-dom';
import { AppRoute, CitiesName } from '../../const';
import { City } from '../../types/city';
import takeCity from '../../utils/utils';
import { OfferFavoriteList } from '../../components/offer-favorite-list/offer-favorite-list';
import { offersActions, offersSelectors } from '../../store/slices/offers/offers-slice';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import getFavoriteOffers from '../../utils/offers';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';


function FavoritePlacesForCity ({city,offers} : {city :City; offers:OfferPreview[]}){

  const dispatch = useAppDispatch();


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_searchParams,setSearchParams] = useSearchParams();
  const locationClickHandler = (cityName : CitiesName) => {

    setSearchParams({'city': cityName});
    dispatch(offersActions.changeCity(cityName));
  };
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link"
            to={`${AppRoute.Main}`}
            onClick = {()=>locationClickHandler(city.name)}
          >
            <span>{city.name}</span>
          </Link>

        </div>
      </div>
      <div className="favorites__places">
        <OfferFavoriteList
          offers ={offers.filter((offer) => offer.city.name === city.name)}
        />
      </div>
    </li>
  );

}

export default function FavoritePage(): JSX.Element {
  const offers = useAppSelector(offersSelectors.offers);
  //Массив городов
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));
  //Фильтруем массив карточек признаку избранное
  const favoriteOffers = getFavoriteOffers(offers);
  if(favoriteOffers.length === 0){
    return(<FavoritesEmptyPage/>);
  }

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
                cities.map((item) =>{
                  const favoriteOffersForCity = favoriteOffers.filter((offer) => offer.city.name === item);
                  if (favoriteOffersForCity.length > 0){
                    return(

                      <FavoritePlacesForCity
                        key={item}
                        city = {takeCity(item)}
                        offers={offers}
                      />);
                  }
                }
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

