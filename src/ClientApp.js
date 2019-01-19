/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { hydrate, render } from 'react-dom';
import { hydrate as hydrateCSS } from 'emotion';
import Loadable from '@react-firenze/react-loadable';
import store from './store/store';
import routes from './routes';

if (process.env.NODE_ENV === 'production') hydrateCSS(window._emotion);

const App = (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>
);

const renderApp = () => {
  if (process.env.NODE_ENV === 'production') {
    Loadable.preloadReady().then(() => {
      hydrate(App, document.getElementById('app'));
    });
  } else {
    render(App, document.getElementById('app'));
  }
};

renderApp();

if (module.hot) module.hot.accept();
