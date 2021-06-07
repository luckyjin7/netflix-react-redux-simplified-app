import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from './store/reducers/rootReducer';

import App from './App';
import './static/sass/style.scss';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)))

const app = (
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app,document.getElementById('root'));
