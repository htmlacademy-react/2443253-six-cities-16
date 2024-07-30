import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesName, DEFAULT_SORT_VARIANT, SortVariants } from '../../const';
import { OFFERS } from '../../mocks/offers';
import { StateType } from '../types';
import { OfferPreview } from '../../types/offer';

const OFFERS_SLICE_NAME = 'offers';

const initialState : StateType = {
  city: CitiesName.Paris,
  offers: OFFERS ,
  sortVariant : DEFAULT_SORT_VARIANT,
};


export const offerSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState: initialState,
  reducers: {
    changeCity(state, action:PayloadAction<CitiesName>) {
      state.city = action.payload;
    },
    reloadOffers(state, action:PayloadAction<OfferPreview[]>) {
      state.offers = action.payload;
    },
    changeSortVariant(state, action:PayloadAction<SortVariants>) {
      state.sortVariant = action.payload;
    },
  },
  selectors: {
    offers: (state:StateType) => state.offers,
    city: (state:StateType) => state.city,
    sortVariant: (state:StateType) => state.sortVariant,
  }
});


export const offerSelectors = offerSlice.selectors;
export const offerActions = offerSlice.actions;

