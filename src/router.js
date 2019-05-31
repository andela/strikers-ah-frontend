/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Login from './components/Login';
import Index from './components/Index';
import Signup from './components/signup';
import { CreateArticle } from './components/article/CreateArticle';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Profile from './components/profile';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/article/create" component={CreateArticle} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile/:username" component={Profile} />
    <Route path="/" exact component={Index} />
  </Switch>
);

export default routes;
