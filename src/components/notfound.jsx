import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import HomeNavBar from './homeNavBar';
import { getLoggedInUser } from '../helpers/authentication';
import '../styles/css/notfound.css';

const NotFound = () => {
  const { username } = getLoggedInUser();
  return (
    <div className="notfound">
      <HomeNavBar user={username} />
      <h1 className="text-center" style={{ color: 'red' }}>
        404 ERROR: This page is not available
      </h1>
    </div>
  );
};

export default NotFound;
