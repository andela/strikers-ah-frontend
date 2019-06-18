import React from 'react';
import { Redirect } from 'react-router';
import LoginService from '../services/login.service';

const SignOut = () => {
  LoginService.logout();
  window.localStorage.clear();
  return <Redirect to="/login" />;
};

export default SignOut;
