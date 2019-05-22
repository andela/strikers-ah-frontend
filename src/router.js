/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import { CreateArticle } from './components/article/CreateArticle';
import ForgotPassword from './components/ForgotPassword';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/login" component={Login} />
    <Route path="/article/create" component={CreateArticle} />
    <Route path="/forgotpassword" component={ForgotPassword} />
  </Switch>
);

export default routes;
