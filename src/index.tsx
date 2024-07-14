import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';


import {OFFERS} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const setting = {
  offersCount : OFFERS.length,
};


root.render(
  <React.StrictMode>
    <App
      offers = {OFFERS}
    />
  </React.StrictMode>
);
