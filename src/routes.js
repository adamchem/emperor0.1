import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/main';
import Order from './components/order';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="order" component={Order} />
  </Route>
);