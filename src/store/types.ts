
import { AuthorizationStatus, CitiesName, SortVariants } from '../const';
import { OfferPreview } from '../types/offer';

export type StateType = {
  city :CitiesName;
  offers: OfferPreview[];
  sortVariant: SortVariants;
  requestStatus:string;
}

export type UserStateType = {
  authStatus : AuthorizationStatus;
}

export type LoaderStateType = {
  loaderStatus : boolean;
}
