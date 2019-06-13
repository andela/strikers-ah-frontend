/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import Signup from './components/signup';
import { getLoggedInUser } from './helpers/authentication';
import { CreateArticle } from './components/article/CreateArticle';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Profile from './components/profile';
import AllArticles from './components/article/AllArticlesComponents';
import getOneArticle from './components/article/ReadArticle';
import OneArticle from './components/article/EditArticle';
import PrivateRoute from './PrivateRoute';
import Settings from './components/Setting';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/articles" component={AllArticles} />
    <PrivateRoute exact path="/article/create" component={CreateArticle} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/signup" component={Signup} />
    <Route path="/" exact component={Index} />
    <PrivateRoute exact path="/article/:slug" component={getOneArticle} />
    <PrivateRoute
      exact
      path="/articlesedit/:slug/edit"
      component={OneArticle}
    />
    <Route
      test-data="profileRouter"
      path="/:username"
      render={props => {
        const { username } = props.match.params;
        const loggedInUser = getLoggedInUser();
        if (username === loggedInUser.username) {
          return <Settings username={username} />;
        }
        return <Profile username={username} />;
      }}
    />
  </Switch>
);

export default routes;
