
import OfferCard from '../../components/offer-card/offer-card';

type MainScreenProps = {
  offersCount:number;
}
//Карточки предложений
const cardSettings = [
  {
    imageSource : 'apartment-01.jpg',
    pricePlace: 120,
    inBookmarks :true,
    placeCardRating :'80%',
    placeCardDescription : 'Beautiful &amp; luxurious apartment at great location',
    PlaceCardType : 'Apartment',

  },
  {
    imageSource : 'room.jpg',
    pricePlace: 80,
    inBookmarks :true,
    placeCardRating :'80%',
    placeCardDescription : 'Wood and stone place',
    PlaceCardType : 'Room',

  },
  {
    imageSource : 'apartment-02.jpg',
    pricePlace: 132,
    inBookmarks :false,
    placeCardRating :'80%',
    placeCardDescription : 'Canal View Prinsengracht',
    PlaceCardType : 'Apartament',

  },
  {
    imageSource : 'apartment-03.jpg',
    pricePlace: 180,
    inBookmarks :false,
    placeCardRating :'100%',
    placeCardDescription : 'Nice, cozy, warm big bed apartment',
    PlaceCardType : 'Apartament',

  },
  {
    imageSource : 'room.jpg',
    pricePlace: 80,
    inBookmarks :true,
    placeCardRating :'80%',
    placeCardDescription : 'Wood and stone place',
    PlaceCardType : 'Room',

  }

];

function MainPage({offersCount}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
              <div className="cities__places-list places__list tabs__content">

                {
                  cardSettings.map((item) =>

                    (
                      <OfferCard key={item.placeCardDescription + item.imageSource}
                        imageSource={item.imageSource}
                        pricePlace={item.pricePlace}
                        inBookmarks={item.inBookmarks}
                        placeCardRating={item.placeCardRating}
                        placeCardDescription={item.placeCardDescription}
                        placeCardType={item.PlaceCardType}
                      />)

                  )
                }

              </div>
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


