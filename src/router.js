/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Index from './components/Index';
import Signup from './components/signup';
import { getLoggedInUser } from './helpers/authentication';
import { CreateArticle } from './components/article/CreateArticle';

// import { CreateArticle } from './components/article/CreateArticle';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Profile from './components/profile';
import AllArticles from './components/article/AllArticlesComponents';
import getOneArticle from './components/article/ReadArticle';
import OneArticle from './components/article/EditArticle';
import PrivateRoute from './PrivateRoute';
import Settings from './components/Setting';
import Logout from './components/logout';
import HomeNavBar from './components/homeNavBar';
import NotFound from './components/notfound';
import Notifications from './components/notifications';
import Category from './components/Category';
import ReportedArticles from './components/reportedArticles';
import SearchResults from './components/search';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route exact path="/articles" component={AllArticles} />
    <PrivateRoute exact path="/article/create" component={CreateArticle} />
    <Route path="/articles/reported" component={ReportedArticles} />
    <Route path="/forgotpassword" component={ForgotPassword} />
    <Route path="/resetpassword/:token" component={ResetPassword} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile/:username" component={Profile} />
    <Route path="/logout" component={Logout} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/" exact component={Index} />
    <PrivateRoute exact path="/article/:slug" component={getOneArticle} />
    <Route path="/topic/:category" component={Category} />
    <PrivateRoute
      exact
      path="/articlesedit/:slug/edit"
      component={OneArticle}
    />
    <Route exact path="/search" component={SearchResults} />
    <Route
      test-data="profileRouter"
      path="/:username"
      exact
      render={props => {
        const { username } = props.match.params;
        const loggedInUser = getLoggedInUser();
        if (username === loggedInUser.username && username !== 'not-found') {
          return (
            <div>
              <HomeNavBar user={username} />
              <Settings username={username} />;
            </div>
          );
        }

        if (username === 'not-found') {
          return <Route path="/not-found" component={NotFound} />;
        }
        return (
          <div>
            {username !== 'not-found' && (
              <React.Fragment>
                <HomeNavBar user={username} />
                <Profile username={username} />;
              </React.Fragment>
            )}
          </div>
        );
      }}
    />
    <Route path="/not-found" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default routes;
