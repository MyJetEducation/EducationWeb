import React from "react";
import ReactDOM from "react-dom";
import { store } from './store';
import { Provider } from 'react-redux';
import './i18n';

import {App} from './App';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);