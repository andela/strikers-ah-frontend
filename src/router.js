import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default routes;
