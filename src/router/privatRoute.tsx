import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { isLoggedIn } from '../store/utils/auth';

const PrivateRoute: React.FC<RouteProps> = ({component: Component, ...rest}) => {
  if (!Component) return null;
  const renderProps = (props: RouteComponentProps) => (
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