import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect, Route } from 'react-router-dom';

const token = localStorage.getItem('token');
let decodedToken;
if (token) {
  decodedToken = jwtDecode(token, { Header: true });
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token && decodedToken.iat < new Date().getTime() ? (
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
