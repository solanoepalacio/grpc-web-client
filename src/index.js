/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import configureStore, { history } from './store/configureStore';
import Root from './app/root';
// require('./favicon.ico'); // Tell webpack to load favicon.ico
// const store = configureStore();

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app/root', () => {
    const NewRoot = require('./app/root').default;
    render(
      <AppContainer>
        <NewRoot/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
