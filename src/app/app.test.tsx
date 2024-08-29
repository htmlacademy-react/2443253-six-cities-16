import { AppRoute } from '../const';
import App from './app';
import { renderWithRouterAndRedux } from './mock-component';
import { waitFor,screen } from '@testing-library/react';

describe('App',()=>{
  it('should gorward to the main page',async()=>{
    const mainPageTestId = 'main-page';
    renderWithRouterAndRedux(<App/>,{route:AppRoute.Main});
    await waitFor(()=>expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument());
  });
  it('should forward to the login page',async()=>{
    const mainPageTestId = 'main-page';
    renderWithRouterAndRedux(<App/>,{route:AppRoute.Login});
    await waitFor(()=>expect(screen.getByTestId(mainPageTestId)).toBeInTheDocument());
  });
});
