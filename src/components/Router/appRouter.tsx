import { Container } from '@material-ui/core';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { history } from '../../shared/services/nav.service';
import Login from '../Pages/Authentification/Login';
import Index from '../Pages/Authentification/Registration';
import HomePage from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound';
import Notifications from '../Pages/Notifications/Notifications';
import Profile from '../Pages/Profile/Profile';
import Search from '../Pages/Search/Search';
import PrivateRoute from './nestedRouters/privatRoute';
import PublicRoute from './nestedRouters/publicRoute';

const appRouter: React.FC = () => {
  return (
    <Container maxWidth={'lg'}>
      <Router history={history}>
        <Switch>
          <PublicRoute restricted={true} component={Login} path='/login'/>
          <PublicRoute restricted={true} component={Index} path='/registration'/>
          <PrivateRoute component={HomePage} path='/' exact={true}/>
          <PrivateRoute component={Search} path='/search'/>
          <PrivateRoute component={Notifications} path='/notifications'/>
          <PrivateRoute component={Profile} path='/profile'/>
          <PublicRoute restricted={false} component={NotFound} path='*'/>
        </Switch>
      </Router>
    </Container>
  );
};

export default appRouter;