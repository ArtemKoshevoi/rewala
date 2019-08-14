import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../store/utils/auth';

const PrivateRoute = ({component: Component, ...rest}: any) => {
  const renderProps = (props: string) => (
    isLoggedIn() ?
      <Component {...props} />
      : <Redirect to='/login'/>
  );
  return (
    <Route
      {...rest}
      render={renderProps}
    />
  );
};

export default PrivateRoute;