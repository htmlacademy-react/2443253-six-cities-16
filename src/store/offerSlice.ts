import { createSlice } from '@reduxjs/toolkit';
import { CitiesName } from '../const';
import { OFFERS } from '../mocks/offers';
import { StateType } from './types';
import { OfferPreview } from '../types/offer';


const initialState : StateType = {
  city: CitiesName.Paris,
  offers: OFFERS
};


const offerSlice = createSlice({
  name: 'offer',
  initialState: initialState,
  reducers: {
    changeCity(state :StateType, action) {
      state.city = action.payload as string;
    },
    reloadOffers(state, action) {
      state.offers = action.payload as OfferPreview[];
    },
  },
});

export const { changeCity, reloadOffers } = offerSlice.actions; // генераторы действий

export default offerSlice.reducer;
