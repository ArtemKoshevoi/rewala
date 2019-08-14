import { Container } from '@material-ui/core';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { LoginScreen } from '../../components/Pages/Authentification/SingIn';
import HomePage from '../../components/Pages/Home';
import Notifications from '../../components/Pages/Notifications';
import Profile from '../../components/Pages/Profile';
import Search from '../../components/Pages/Search';
import PrivateRoute from '../privatRoute';
import PublicRoute from '../publicRoute';
import { RootState } from '../../store';
import { getIsAuthorized } from '../../store/auth/selectors';
import { connect } from 'react-redux';
import history from '../../history';

const mapStateToProps = (state: RootState) => ({
  requestState: getIsAuthorized(state),
});

const appRouter: React.FC = () => {
  return (
    <Container maxWidth={'md'}>
      <Router history={history}>
        <Switch>
          <PublicRoute restricted={true} component={LoginScreen} path='/login'/>
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