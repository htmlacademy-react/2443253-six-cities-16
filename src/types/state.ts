// import {store} from '../store/index.js';

import { CitiesName } from '../const';
import { OfferPreview } from './offer';

// export type State = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

export type OfferState ={
  currentCity : typeof CitiesName;
  offerByCurrentCity:OfferPreview[];

}
