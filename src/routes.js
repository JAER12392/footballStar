import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './components/App.js';
import LoginPage from './components/home/LoginPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    </Route>
  );
