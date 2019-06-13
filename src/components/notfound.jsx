import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-named-as-default
import HomeNavBar from './homeNavBar';
import { getLoggedInUser } from '../helpers/authentication';
import '../styles/scss/notfound.scss';
import notfound from '../styles/img/notfound.png';

const NotFound = () => {
  const { username } = getLoggedInUser();
  return (
    <Fragment>
      <HomeNavBar user={username} />
      <div className="notfound">
        <img src={notfound} alt="not-found" />
      </div>
    </Fragment>
  );
};

export default NotFound;
