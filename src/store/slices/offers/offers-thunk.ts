
import { DATA_PATH_URL} from '../../../const';
import { OfferPreview } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';


import { OFFERS_SLICE_NAME } from '../slice-names';


export const fetchOffersAction = createAppAsyncThunk<OfferPreview[], void>(
  `${OFFERS_SLICE_NAME}/fetchOffers`,
  async (_, { extra: api },
  ) => {
    const { data } = await api.get<OfferPreview[]>(DATA_PATH_URL.Offers);
    return data;
  }
);

