
import { mockOfferId, OFFERS_DETAIL } from '../../../mocks/offers';
import { RequestStatus } from '../../../services/api';
import { offerActions, offerSlice } from './offer-slice';
import { fetchOffer } from './offer-thunk';

describe('Offer Slice', () => {
  describe('ExtraReducers OfferSlice', () => {
    const initialState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle,
    };
    it('should return initial state with empty action', () => {
      const emptyAction = {type: ''};
      const result = offerSlice.reducer(initialState, emptyAction);
      expect(result).toEqual(initialState);
    });

    it('should return loading when fetchOffer.pending', () => {
      const expectedState = {
        info: null,
        nearby: [],
        status: RequestStatus.Loading,
      };
      const result = offerSlice.reducer(initialState, fetchOffer.pending('',mockOfferId));
      expect(result).toEqual(expectedState);

    });
    it('should return success when fetchOffer.fulfilled', () => {
      const mocksOffer = OFFERS_DETAIL[0];
      const expectedState = {
        info: mocksOffer,
        nearby: [],
        status: RequestStatus.Success,
      };
      const result = offerSlice.reducer(initialState, fetchOffer.fulfilled(OFFERS_DETAIL[0],'',''));
      expect(result).toEqual(expectedState);

    });
    it('should return Failed when fetchOffer.rejected', () => {
      const expectedState = {
        info: null,
        nearby: [],
        status: RequestStatus.Failed,

      };
      const result = offerSlice.reducer(initialState, fetchOffer.rejected(null,'',''));
      expect(result).toEqual(expectedState);

    });
  });

  //Обычные редьюсеры для store actions
  describe('Reducers OfferSlice', () => {
    const initialState = {
      info: null,
      nearby: [],
      status: RequestStatus.Idle,
    };

    it('should return offer with updated favoriteStatus when updateOffer', () => {
      let mocksOffer = OFFERS_DETAIL[0];
      mocksOffer = {...mocksOffer,isFavorite: !mocksOffer.isFavorite};
      const expectedState = {
        info: mocksOffer,
        nearby: [],
        status: RequestStatus.Idle,
      };
      const result = offerSlice.reducer(initialState, offerActions.updateOffer(OFFERS_DETAIL[0].id));
      expect(result).toEqual(expectedState);
    });
  });
});

