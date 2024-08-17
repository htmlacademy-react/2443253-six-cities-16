
import { DATA_PATH_URL} from '../../../const';
import { OfferPreview } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';

import { loaderActions } from '../loader/loader-slice';
import { OFFERS_SLICE_NAME } from '../slice-names';


export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, { dispatch,extra: api },
  ) => {
    dispatch(loaderActions.changeLoaderStatus(true));
    const { data } = await api.get<OfferPreview[]>(DATA_PATH_URL.Offers);
    dispatch(loaderActions.changeLoaderStatus(false));
    return data;
  }
);

// // eslint-disable-next-line no-console
// console.dir(fetchOffersAction);


