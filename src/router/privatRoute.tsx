
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLoggedIn} from "../store/utils/auth";

const PrivateRoute = ({component: Component, ...rest}: any) => {
  return (
    <Route {...rest} render={props => (
      isLoggedIn() ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;