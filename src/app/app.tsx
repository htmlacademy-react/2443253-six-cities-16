import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {AppRoute} from '../const';
import MainPage from '../pages/main-page/main-page';
import OfferPage from '../pages/offer-page/offer-page';
import FavoritePage from '../pages/favorites-page/favorites-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoginPage from '../pages/login-page/login-page';

import PrivateRoute from '../components/private-route/private-route';
import Layout from '../components/layout/layout.tsx';
import { HelmetProvider } from 'react-helmet-async';


import { useEffect } from 'react';
import { useActionCreators } from '../store/hooks/useActionCreators';
import { userActions } from '../store/slices/user/user-slice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hooks/use-auth';

function App(): JSX.Element {
  const isAuth = useAuth();
  const {checkAuth} = useActionCreators(userActions);
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer/>
        <Routes>
          <Route element={<Layout isAuth = {isAuth}/>}>
            <Route
              path={AppRoute.Main}
              element={<MainPage/>}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute unAuth ={false}>
                  <FavoritePage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.OfferId} element={<OfferPage/>} />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute unAuth>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>{/* LayoutMain */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
