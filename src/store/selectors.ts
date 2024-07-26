import { createSelector } from '@reduxjs/toolkit';
import { StateType } from './types';


// Селектор стейта общий
export const all = (state: StateType) => state;

export const city = createSelector( //текущий город
  all,
  (state) => state.city
);
export const offers = createSelector( // предложения
  all,
  (state) => state.offers
);

export const selectors = {
  offer:{
    city: city,
    offers: offers,
  }
};
