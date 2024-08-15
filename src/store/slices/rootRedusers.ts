import { combineReducers } from '@reduxjs/toolkit';
import {offersSlice} from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { loaderSlice } from './loader/loader-slice';


export const rootReducers = combineReducers({
  [offersSlice.name] : offersSlice.reducer,
  [userSlice.name] : userSlice.reducer,
  [loaderSlice.name] : loaderSlice.reducer
});
