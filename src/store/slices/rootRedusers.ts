import { combineReducers } from '@reduxjs/toolkit';
import {offersSlice} from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { favoritesSlice } from './favorites/favorites-slice';
import { offerSlice } from './offer/offer-slice';
import { reviewsSlice } from './reviews/reviews-slice';


export const rootReducers = combineReducers({
  [offersSlice.name] : offersSlice.reducer,
  [offerSlice.name] : offerSlice.reducer,
  [userSlice.name] : userSlice.reducer,
  [favoritesSlice.name] : favoritesSlice.reducer,
  [reviewsSlice.name] : reviewsSlice.reducer
});
