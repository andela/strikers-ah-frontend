import React from 'react';
import { Redirect } from 'react-router';

const SignOut = () => {
  window.localStorage.clear();
  return <Redirect to="/login" />;
};

export default SignOut;
