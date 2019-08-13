import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../../components/Pages/Authentification/SingIn';
import HomePage from '../../components/Pages/Home';
import Notifications from '../../components/Pages/Notifications';
import { ProfileScreen } from '../../components/Pages/Profile';
import Search from '../../components/Pages/Search';
import PrivateRoute from '../privatRoute';
import PublicRoute from '../publicRoute';

const appRouter: React.FC = () => {
  return (
    <Container maxWidth={'md'}>
      <Router>
        <Switch>
          <PublicRoute restricted={true} component={LoginScreen} path='/login'/>
          <PrivateRoute component={HomePage} path='/' exact={true}/>
          <PrivateRoute component={Search} path='/search'/>
          <PrivateRoute component={Notifications} path='/notifications'/>
          <PrivateRoute component={ProfileScreen} path='/profile'/>
        </Switch>
      </Router>
    </Container>
  );
};

export default appRouter;


