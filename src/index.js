import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { Provider } from 'react-redux';
import store from  './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);