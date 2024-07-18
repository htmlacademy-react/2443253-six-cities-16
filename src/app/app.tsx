import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute,AuthorizationStatus, CityMap} from '../const';
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritePage from '../pages/favorites-page/favorites-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoginPage from '../pages/login-page/login-page';

import PrivateRoute from '../components/private-route/private-route';
import LayoutMain from '../components/Layout-main/layout-main';
import { HelmetProvider } from 'react-helmet-async';

import {OfferPreview} from '../types/offer';


type AppScreenProps = {
  offers : OfferPreview[];
}

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<LayoutMain/>}>
            <Route
              index element={<MainPage offers = {offers} locations ={CityMap}/>}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
            <Route
              path={AppRoute.Favorite}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                >
                  <FavoritePage offers = {offers}/>
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
