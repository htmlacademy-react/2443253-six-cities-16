import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {setting} from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      offersCount = {setting.offersCount}
    />
  </React.StrictMode>
);
