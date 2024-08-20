import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesName, DEFAULT_SORT_VARIANT, SortVariants } from '../../../const';
import { OFFERS } from '../../../mocks/offers';
import { StateType } from '../../types';
import { OfferPreview } from '../../../types/offer';
import { fetchOffersAction } from './offers-thunk';
import { OFFERS_SLICE_NAME } from '../slice-names';
import { RequestStatus } from '../../../services/api';


const initialState : StateType = {
  city: CitiesName.Paris,
  offers: OFFERS ,
  activeId: '' ,
  sortVariant : DEFAULT_SORT_VARIANT,
  requestStatus: RequestStatus.Idle
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
    setActiveId(state, action:PayloadAction<OfferPreview['id']>) {
      state.activeId = action.payload;
    },
    updateOffers: (state, action: PayloadAction<string>) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload
          ? { ...offer, isFavorite: !offer.isFavorite }
          : offer);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOffersAction.pending,
        (state) => {
          state.requestStatus = RequestStatus.Loading;
        }
      )
      .addCase(
        fetchOffersAction.fulfilled,
        (state, action) => {
          state.offers = action.payload;
          state.requestStatus = RequestStatus.Success;
        }
      ) .addCase(
        fetchOffersAction.rejected,
        (state) => {
          state.requestStatus = RequestStatus.Failed;
        }
      );
  },
  selectors: {
    offers: (state:StateType) => state.offers,
    city: (state:StateType) => state.city,
    activeId: (state:StateType) => state.activeId,
    sortVariant: (state:StateType) => state.sortVariant,
    requestStatus: (state:StateType) => state.requestStatus
  }
});


export const offersSelectors = offersSlice.selectors;
export const offersActions = { ...offersSlice.actions, fetchOffersAction};

