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
import AllArticles from './components/article/AllArticlesComponents';
import getOneArticle from './components/article/ReadArticle';
import OneArticle from './components/article/EditArticle';
import PrivateRoute from './PrivateRoute';
import BookmarkedArticles from './components/article/bookmarkedArticles';
import Settings from './components/Setting';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/articles" component={AllArticles} />
    <PrivateRoute exact path="/article/create" component={CreateArticle} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile/:username" component={Profile} />
    <Route path="/" exact component={Index} />
    <Route path="/settings" component={Settings} />
    <PrivateRoute exact path="/article/:slug" component={getOneArticle} />
    <PrivateRoute
      exact
      path="/articlesedit/:slug/edit"
      component={OneArticle}
    />
    <Route
      path="/bookmarked-articles"
      render={props => <BookmarkedArticles {...props} />}
    />
  </Switch>
);

export default routes;
