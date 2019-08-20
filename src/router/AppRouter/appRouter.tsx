import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import Login from '../../components/Pages/Authentification/Login';
import Index from '../../components/Pages/Authentification/Registration';
import HomePage from '../../components/Pages/Home/Home';
import Notifications from '../../components/Pages/Notifications/Notifications';
import Profile from '../../components/Pages/Profile/Profile';
import Search from '../../components/Pages/Search/Search';
import history from '../../history';
import { RootState } from '../../store';
import { getIsAuthorized } from '../../store/auth/selectors';
import PrivateRoute from '../privatRoute';
import PublicRoute from '../publicRoute';

const mapStateToProps = (state: RootState) => ({
  requestState: getIsAuthorized(state),
});

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
        </Switch>
      </Router>
    </Container>
  );
};

export default connect(mapStateToProps)(appRouter);