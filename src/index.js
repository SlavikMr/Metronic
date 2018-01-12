import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/index.scss';

const rootEl = document.getElementById('root');
const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer warning={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

registerServiceWorker();
