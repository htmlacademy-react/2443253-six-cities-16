import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';

import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore, store } from '../store';
import HistoryRouter from '../components/history-route/history-route';
import { PropsWithChildren, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
interface ExtendedRenderOptions extends Omit<RenderOptions,'queries'> {
  preloadedState?: Partial<RootState>;
  store?:AppStore;
}

export function withHistory(component:JSX.Element,history?:MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();
  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        <Provider store={store}>
          {component}
        </Provider>
      </HelmetProvider>
    </HistoryRouter>
  );
}
export function renderWithRouterAndRedux(component:ReactElement,
  {route = '/',preloadedState = {}, store:Store = setupStore(preloadedState)} : ExtendedRenderOptions & {route?:string} = {}) {
  window.history.pushState({}, document.title, route);
  function Wrapper({children}:PropsWithChildren){
    return(
      <HelmetProvider>
        <BrowserRouter>
          <Provider store={Store}>
            {children}
          </Provider>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
  return {store:Store, ...render(component,{wrapper : Wrapper})};
}
