import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { isLoggedIn } from '../store/utils/auth';

interface Props extends RouteProps {
  restricted: boolean;
}

const PublicRoute: React.FC<Props> = ({component: Component, restricted, ...rest}) => {
  if (!Component) return null;
  const renderProps = (props: RouteComponentProps) => (
    isLoggedIn() && restricted ?
      <Redirect to='/'/>
      : <Component {...props} />
  );
  return (
    <Route
      {...rest}
      render={renderProps}
    />
  );
};

export default PublicRoute;