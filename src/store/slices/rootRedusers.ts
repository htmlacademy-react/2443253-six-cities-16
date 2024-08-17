import { combineReducers } from '@reduxjs/toolkit';
import {offersSlice} from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { loaderSlice } from './loader/loader-slice';
import { favoritesSlice } from './favorites/favorites-slice';
import { offerSlice } from './offer/offer-slice';


export const rootReducers = combineReducers({
  [offersSlice.name] : offersSlice.reducer,
  [offerSlice.name] : offerSlice.reducer,
  [userSlice.name] : userSlice.reducer,
  [loaderSlice.name] : loaderSlice.reducer,
  [favoritesSlice.name] : favoritesSlice.reducer
});
