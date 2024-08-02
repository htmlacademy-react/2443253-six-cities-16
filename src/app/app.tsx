import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute,AuthorizationStatus, HARDCORE_TOKEN} from '../const';
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritePage from '../pages/favorites-page/favorites-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoginPage from '../pages/login-page/login-page';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PrivateRoute from '../components/private-route/private-route';
import LayoutMain from '../components/layout-main/layout-main';
import { HelmetProvider } from 'react-helmet-async';


import { newUser, OFFERS_DETAIL, OFFERS_NEARBY } from '../mocks/offers';

import { User } from '../types/user';
import { saveToken } from '../services/token';
import Spinner from '../components/spinner/spinner';
import { useAppSelector } from '../store/hooks/useAppSelector';
import { loaderSelectors } from '../store/slices/loader/loader-slice';


type AppState = {
  authStatus : AuthorizationStatus;
  favoritesCount : number;
  user:User;
}
const initAppState: AppState = {authStatus:AuthorizationStatus.Auth,favoritesCount:3,user : newUser};

function App(): JSX.Element {
  const {authStatus, favoritesCount,user} = initAppState;
  saveToken(HARDCORE_TOKEN);
  const loadingStatus = useAppSelector(loaderSelectors.loaderStatus);
  if (loadingStatus){
    return(
      <Spinner/>
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element ={<LayoutMain favoritesCount = {favoritesCount} authStatus = {authStatus} currentUser = {user}/>}>
            <Route
              path={AppRoute.Main}
              element={<MainPage/>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={authStatus}
                >
                  {/* {getFavoriteOffers(offers).length > 0 ? */}
                  {/* <FavoritePage offers = {offers}/> : */}
                  <FavoritePage/>
                  {/* <FavoritesEmptyPage/>} */}
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.OfferId}
              element={<OfferPage offers = {Array.from([OFFERS_DETAIL[0]])} offersNearby = {OFFERS_NEARBY}authStatus = {authStatus} />}
            />

            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
