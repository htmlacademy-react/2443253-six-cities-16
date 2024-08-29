import { CitiesName, DEFAULT_SORT_VARIANT} from '../../../const';
import { RequestStatus } from '../../../services/api';
import { offersSlice } from './offers-slice';
import { fetchOffersAction } from './offers-thunk';

describe('Offers Slice', () => {
  describe('ExtraReducers OffersSlice', () => {
    const initialState = {
      city: CitiesName.Paris,
      offers: [] ,
      activeId: '' ,
      sortVariant : DEFAULT_SORT_VARIANT,
      requestStatus: RequestStatus.Idle
    };
    it('should return initial state with empty action', () => {
      const emptyAction = {type: ''};
      const result = offersSlice.reducer(initialState, emptyAction);
      expect(result).toEqual(initialState);
    });

    it('should return loading when fetchOffersAction.pending', () => {
      const expectedState = {
        city: CitiesName.Paris,
        offers: [],
        requestStatus: RequestStatus.Loading,

      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.pending('',undefined));
      expect(result).toEqual(expectedState);

    });
    it('should return success when fetchFavoriteAction.fulfilled', () => {
      const expectedState = {
        city: CitiesName.Paris,
        offers: [],
        requestStatus: RequestStatus.Success,
      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.fulfilled([],'',undefined));
      expect(result).toEqual(expectedState);

    });
    it('should return Failed when fetchFavoriteAction.rejected', () => {
      const expectedState = {
        city: CitiesName.Paris,
        offers: [],
        requestStatus: RequestStatus.Failed,

      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.rejected(null,'',undefined));
      expect(result).toEqual(expectedState);

    });
  });

});

