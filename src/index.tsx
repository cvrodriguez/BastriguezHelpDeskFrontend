import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store'

ReactDOM.render(
  <Auth0Provider
  domain="dev-3ugne2hhrxoqqfdi.us.auth0.com"
  clientId="VN8xuek5B9pXJP0ETreXLgDZnu9On6Xi"
  redirectUri={window.location.origin}>
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>
  </Auth0Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
