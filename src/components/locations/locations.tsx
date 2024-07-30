import { MouseEvent, useEffect } from 'react';
import { CitiesName } from '../../const';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offerActions, offerSelectors } from '../../store/slices/offer-slice';
import { useSearchParams } from 'react-router-dom';

export function Locations(): JSX.Element {

  const currentCity = useAppSelector(offerSelectors.city);
  const dispatch = useAppDispatch();
  const [searchParams,setSearchParams] = useSearchParams();

  let currentCityUrl = searchParams.get('city') as CitiesName;
  currentCityUrl = currentCityUrl ? currentCityUrl : currentCity as CitiesName;

  useEffect(() => {
    setSearchParams({
      'city': currentCityUrl
    });

    dispatch(offerActions.changeCity(currentCityUrl));
  }
  ,[]);

  const onChangeCityClickHandler = (evt:MouseEvent<HTMLElement>,city:CitiesName):void => {
    evt.preventDefault();
    dispatch(offerActions.changeCity(city));
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
              <a className="locations__item-link tabs__item" href="#"
                style = {city === currentCity ? {border : '1px solid'} : {border : ''}}
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
