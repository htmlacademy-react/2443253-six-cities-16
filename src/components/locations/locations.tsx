import { MouseEvent, useEffect } from 'react';
import { CitiesName } from '../../const';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offersActions, offersSelectors } from '../../store/slices/offers/offers-slice';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

export function Locations(): JSX.Element {

  const currentCity = useAppSelector(offersSelectors.city);
  const dispatch = useAppDispatch();
  const [searchParams,setSearchParams] = useSearchParams();

  let currentCityUrl = searchParams.get('city') as CitiesName;
  currentCityUrl = currentCityUrl ? currentCityUrl : currentCity ;

  useEffect(() => {
    setSearchParams({
      'city': currentCityUrl
    });

    dispatch(offersActions.changeCity(currentCityUrl));
  }
  ,[]);

  const onChangeCityClickHandler = (evt:MouseEvent<HTMLElement>,city:CitiesName):void => {
    evt.preventDefault();
    dispatch(offersActions.changeCity(city));
    setSearchParams({
      'city': city,
    });
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CitiesName).map((city) => (
            <li key={city} className="locations__item">
              <a className={clsx('locations__item-link','tabs__item',(city === currentCity) && 'tabs__item--active')}
                href="#"
                onClick = {(evt) => onChangeCityClickHandler(evt,city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

}
