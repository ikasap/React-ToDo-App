import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

const s = createStore(reducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

ReactDOM.render(
  <Provider store={s}>
    <App />
  </Provider>, 
  document.getElementById('root')
);