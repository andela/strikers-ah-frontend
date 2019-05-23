/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import { CreateArticle } from './components/article/CreateArticle';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/login" component={Login} />
    <Route path="/article/create" component={CreateArticle} />
  </Switch>
);

export default routes;
