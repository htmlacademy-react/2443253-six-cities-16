import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';


import {OFFERS} from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { fetchOffersAction } from './store/slices/offers/offers-thunk.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const setting = {
  offersCount : OFFERS.length,
};
store.dispatch(fetchOffersAction());


root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
