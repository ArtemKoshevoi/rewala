import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../store/utils/auth';

const PublicRoute = ({component: Component, restricted, ...rest}: any) => {
  const renderProps = (props: string) => (
    isLoggedIn() && restricted ?
      <Redirect to='/'/>
      : <Component {...props} />
  );
  console.log({...rest});
  return (
    <Route
      {...rest}
      render={renderProps}
    />
  );
};

export default PublicRoute;