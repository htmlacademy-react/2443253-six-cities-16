import { useActionCreators } from '../../store/hooks/useActionCreators';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offersActions, offersSelectors } from '../../store/slices/offers/offers-slice';

export default function MainPageEmpty(): JSX.Element {
  const { fetchOffersAction } = useActionCreators(offersActions);
  const currentCity = useAppSelector(offersSelectors.city);
  const handleReloadOffers = () =>{
    fetchOffersAction();
  };
  return(
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
          <button
            onClick ={()=>handleReloadOffers()}
            className="cities__button cities__button--back"
          >Try again
          </button>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );

}
