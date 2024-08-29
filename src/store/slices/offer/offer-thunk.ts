import { DataPathUrl} from '../../../const';
import { Offer, OfferPreview } from '../../../types/offer';
import { createAppAsyncThunk } from '../../hooks/createAppAsyncThunk';


export const fetchOffer = createAppAsyncThunk<Offer, string>(
  'offer/fetchOffer',

  async (offerId, {extra: api }) => {

    const response = await api.get<Offer>(`${DataPathUrl.Offers}/${offerId}`);

    return response.data;
  }
);

export const fetchNearBy = createAppAsyncThunk<OfferPreview[], string>(
  'offer/fetchNearBy',
  async (offerId, { extra: api }) => {
    const response = await api.get<OfferPreview[]>(
      `${DataPathUrl.Offers}/${offerId}/nearby`
    );

    return response.data;
  }
);

