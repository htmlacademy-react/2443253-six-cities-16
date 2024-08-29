
import { AuthorizationStatus, CitiesName, SortVariants } from '../const';
import { RequestStatus } from '../services/api';
import { Offer, OfferPreview } from '../types/offer';
import { Review } from '../types/review';
import { User } from '../types/user';

export type StateType = {
  city :CitiesName;
  offers: OfferPreview[];
  activeId: string;
  sortVariant: SortVariants;
  requestStatus:RequestStatus;
}

export type UserState = {
  info: User | null;
  status: AuthorizationStatus;
};


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

export type FavoritesState = {
  items: OfferPreview[];
  status: RequestStatus;
};
