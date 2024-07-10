import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute,AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages//not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';

import PrivateRoute from '../../components/private-route/private-route';


type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount}/>}
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
              <FavoritePage />
            </PrivateRoute>
          }
        />
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

  );
}

export default App;
