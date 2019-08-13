import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../store/utils/auth';

const PublicRoute = ({component: Component, restricted, ...rest}: any) => {
  console.log({...rest});
  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn() && restricted ?
          <Redirect to='/'/>
          : <Component {...props} />
      )}
    />
  );
};

export default PublicRoute;