import React from "react";
import ReactDOM from "react-dom";
import App from './views/App';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("index"),
);

