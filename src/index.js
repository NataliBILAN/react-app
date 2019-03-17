import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './App';
import BaseStyle from './ui/baseStyle';

ReactDOM.render(
  <Provider store={store}>
    <BaseStyle />
    <App />
  </Provider>,
  document.querySelector('#root'),
);
