import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesName, DEFAULT_SORT_VARIANT, SortVariants } from '../../../const';
import { OFFERS } from '../../../mocks/offers';
import { StateType } from '../../types';
import { OfferPreview } from '../../../types/offer';
import { fetchOffersAction } from './offers-thunk';
import { OFFERS_SLICE_NAME } from '../slice-names';


const initialState : StateType = {
  city: CitiesName.Paris,
  offers: OFFERS ,
  sortVariant : DEFAULT_SORT_VARIANT,
  requestStatus: 'idle'
};


export const offersSlice = createSlice({
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
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOffersAction.pending,
        (state) => {
          state.requestStatus = 'loading';
        }
      )
      .addCase(
        fetchOffersAction.fulfilled,
        (state, action) => {
          state.offers = action.payload;
          state.requestStatus = 'success';
        }
      ) .addCase(
        fetchOffersAction.rejected,
        (state) => {
          state.requestStatus = 'failed';
        }
      );
  },
  selectors: {
    offers: (state:StateType) => state.offers,
    city: (state:StateType) => state.city,
    sortVariant: (state:StateType) => state.sortVariant,
  }
});


export const offersSelectors = offersSlice.selectors;
export const offersActions = { ...offersSlice.actions, fetchOffersAction};

