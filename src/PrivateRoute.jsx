import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect, Route } from 'react-router-dom';

const token = localStorage.getItem('token');
const currentTime = new Date().getTime() / 1000;
let decodedToken;
if (token) {
  decodedToken = jwtDecode(token, { Header: true });
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token !== null && decodedToken.exp > currentTime ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
