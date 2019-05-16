import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const routes = () => (
  <Switch>
    <Route exact path="/" render={() => <h1>app</h1>} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default routes;
