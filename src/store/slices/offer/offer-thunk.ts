import { DATA_PATH_URL} from '../../../const';
import { Offer, OfferPreview } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';
import { loaderActions } from '../loader/loader-slice';

export const fetchOffer = createAppAsyncThunk<Offer, string>(
  'offer/fetchOffer',

  async (offerId, { dispatch,extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.get<Offer>(`${DATA_PATH_URL.Offers}/${offerId}`);
    dispatch(loaderActions.changeLoaderStatus(false));
    return response.data;
  }
);

export const fetchNearBy = createAppAsyncThunk<OfferPreview[], string>(
  'offer/fetchNearBy',
  async (offerId, {dispatch, extra: api }) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const response = await api.get<OfferPreview[]>(
      `${DATA_PATH_URL.Offers}/${offerId}/nearby`
    );
    dispatch(loaderActions.changeLoaderStatus(false));

    return response.data;
  }
);

