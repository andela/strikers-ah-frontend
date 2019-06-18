/* eslint-disable import/no-named-as-default */
import React from 'react';
import HomeNavBar from '../homeNavBar';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HomeNavBar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
