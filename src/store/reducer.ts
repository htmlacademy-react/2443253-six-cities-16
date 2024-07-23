import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action.ts';
import { OFFERS } from '../mocks/offers.ts';
import { CityMap } from '../const.ts';
import { City } from '../types/city.ts';
import { OfferPreview } from '../types/offer.ts';

//type State = {city : City; offers:OfferPreview[]};

const initialState = {
  city: CityMap.Paris,
  offersForCity: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,newCity) => {
      state.city = newCity.payload;
    })
    .addCase(changeCity, (state) => {
      state.offers = OFFERS.filter((offer) => offer.city.name === state.city.name.toString());
    });
});

