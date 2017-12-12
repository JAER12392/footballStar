import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './components/App.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    </Route>
  );
