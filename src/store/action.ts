import { changeCity as offerChangeCity, reloadOffers as offerReloadOffers} from './offerSlice';

export const actions = {
  offer: {
    changeCity: offerChangeCity,
    reloadOffers: offerReloadOffers,
  },
};
