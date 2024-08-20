
import { AuthorizationStatus, CitiesName, SortVariants } from '../const';
import { RequestStatus } from '../services/api';
import { Offer, OfferPreview } from '../types/offer';
import { Review } from '../types/review';

export type StateType = {
  city :CitiesName;
  offers: OfferPreview[];
  activeId: string;
  sortVariant: SortVariants;
  requestStatus:RequestStatus;
}

export type UserStateType = {
  authStatus : AuthorizationStatus;
}

export type LoaderStateType = {
  loaderStatus : boolean;
}

export enum FavoritesStatus {
  Removed,
  Added,
}

export type ChangeProps = {
  offerId: string;
  status: FavoritesStatus;
};

export type ChangeResponse = {
  offer: OfferPreview;
  status: FavoritesStatus;
};

export type OfferState = {
  info: Offer | null;
  nearby: OfferPreview[];
  status: RequestStatus;
};

export type ReviewsState = {
  items: Review[];
  status: RequestStatus;
};
