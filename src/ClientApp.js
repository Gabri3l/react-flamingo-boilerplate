/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { hydrate, render } from 'react-dom';
import { hydrate as emotionHydrate } from 'emotion';
import Loadable from '@react-firenze/react-loadable';
import store from './store/store';
import routes from './routes';

const env = process.env.NODE_ENV;

if (env === 'production') emotionHydrate(window._emotion);

const renderApp = () => {
  if (env === 'production') {
    Loadable.preloadReady()
      .then(() => {
        hydrate(
          <Provider store={store}>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
          </Provider>,
          document.getElementById('app'),
        );
      });
  } else {
    render(
      <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>,
      document.getElementById('app'),
    );
  }
};

renderApp();

if (module.hot) module.hot.accept();
