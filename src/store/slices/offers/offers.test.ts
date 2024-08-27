import { CitiesName, DEFAULT_SORT_VARIANT, SortVariants } from '../../../const';
import { mockOfferId, mockOffersPreview} from '../../../mocks/offers';
import { RequestStatus } from '../../../services/api';
import { offersActions, offersSlice } from './offers-slice';
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
        activeId: '' ,
        sortVariant : DEFAULT_SORT_VARIANT,
        requestStatus: RequestStatus.Loading,

      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.pending('',undefined));
      expect(result).toEqual(expectedState);

    });
    it('should return success when fetchFavoriteAction.fulfilled', () => {
      const mocksOffers = mockOffersPreview;
      const expectedState = {
        city: CitiesName.Paris,
        offers: mocksOffers,
        activeId: '' ,
        sortVariant : DEFAULT_SORT_VARIANT,
        requestStatus: RequestStatus.Success,
      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.fulfilled(mocksOffers,'',undefined));
      expect(result).toEqual(expectedState);

    });
    it('should return Failed when fetchFavoriteAction.rejected', () => {
      const mocksOffers = mockOffersPreview;
      const expectedState = {
        city: CitiesName.Paris,
        offers: mocksOffers,
        activeId: '' ,
        sortVariant : DEFAULT_SORT_VARIANT,
        requestStatus: RequestStatus.Failed,

      };
      const result = offersSlice.reducer(initialState, fetchOffersAction.rejected(null,'',undefined));
      expect(result).toEqual(expectedState);

    });
  });

  //Обычные редьюсеры для store
  describe('Reducers OffersSlice', () => {
    const initialState = {
      city: CitiesName.Paris,
      offers: [] ,
      activeId: '' ,
      sortVariant : DEFAULT_SORT_VARIANT,
      requestStatus: RequestStatus.Idle
    };

    it('should return newCity = Amsterdam when changeCity', () => {
      const expectedState = {
        city: CitiesName.Amsterdam,//обновление города
        offers: [] ,
        activeId: '' ,
        sortVariant : DEFAULT_SORT_VARIANT,
        requestStatus: RequestStatus.Idle
      };
      const result = offersSlice.reducer(initialState, offersActions.changeCity(CitiesName.Amsterdam));
      expect(result).toEqual(expectedState);

    });
    it('should return new sortVariant when changeSortVariant', () => {
      const expectedState = {
        city: CitiesName.Paris,
        offers: [] ,
        activeId: '' ,
        sortVariant : SortVariants.Popular,//обновление варианта сортировки
        requestStatus: RequestStatus.Idle
      };
      const result = offersSlice.reducer(initialState, offersActions.changeSortVariant(SortVariants.Popular));
      expect(result).toEqual(expectedState);

    });

    it('should return new ActiveId when setActiveId', () => {
      const expectedState = {
        city: CitiesName.Paris,
        offers: [] ,
        activeId: mockOfferId ,
        sortVariant : DEFAULT_SORT_VARIANT,//обновление варианта сортировки
        requestStatus: RequestStatus.Idle
      };
      const result = offersSlice.reducer(initialState, offersActions.setActiveId(mockOfferId));
      expect(result).toEqual(expectedState);
    });

    it('should return offers with updated favoriteStatus(seached by offer.id) when updateOffers', () => {
      const mocksOffers = mockOffersPreview;
      mocksOffers[1] = {...mocksOffers[1],isFavorite: !mocksOffers[1].isFavorite};
      const expectedState = {
        city: CitiesName.Paris,
        offers: mocksOffers,//обновление статуса у второго предложения из mocksOffers (mockOfferId у второго элемента)
        activeId: '' ,
        sortVariant : DEFAULT_SORT_VARIANT,
        requestStatus: RequestStatus.Idle
      };
      const result = offersSlice.reducer(initialState, offersActions.updateOffers(mockOfferId));
      expect(result).toEqual(expectedState);
    });
  });
});

