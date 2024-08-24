import { createMemoryHistory, MemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import {HistoryRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

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
