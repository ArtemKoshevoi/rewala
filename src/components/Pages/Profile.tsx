import { Button, Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { reduxForm } from 'redux-form';
import Header from '../../shared/components/header';
import { getToken, removeToken } from '../../shared/services/auth.service';
import { RootState } from '../../store';
import { Actions } from '../../store/auth/actions';
import { getState } from '../../store/auth/selectors';

const mapStateToProps = (state: RootState) => {
  const {logoutRequest} = getState(state);
  return {requestState: logoutRequest.data};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(Actions.getCurrentUser()),
  logout: (logoutValue: { FCMToken: string }) => dispatch((Actions.logout(logoutValue))),
});

class Profile extends React.Component {
  render(): React.ReactNode {
    const {getCurrentUser, handleSubmit, requestState, logout}: any = this.props;
    const logOut = (): void => {
      const FCMToken = getToken();
      logout({FCMToken});
    };

    const getMe = (): void => {
      return getCurrentUser();
    };

    if (requestState !== null && requestState.data.logout) {
      console.log(requestState);
      removeToken(requestState.data.logout);
      if (!getToken()) {
        console.log(111, requestState.data.logout);
        // return  (
        //   <Redirect to='/login' />
        // )
      }
    }

    return (
      <Container>
        <Header/>
        <form onSubmit={handleSubmit(getMe)}>
          <Button type='submit' variant='contained' color='secondary'>
            Get Me
          </Button>
        </form>
        <form onSubmit={handleSubmit(logOut)}>
          <Button type='submit' variant='contained' color='primary'>
            Log Out
          </Button>
        </form>
      </Container>
    );
  }
}

/*const profile = ({getCurrentUser, handleSubmit, requestState, logout}: any) => {
  const getMe = (): void => {
    return getCurrentUser();
  };

  const logOut = (): void => {
    const FCMToken = getToken();
    logout({FCMToken});
    removeToken();
  };

  if (requestState !== null){
    if (!requestState.data.logout) {
      return  (
        <Redirect to='/login' />
      )
    }
  }

  return (
    <Container>
      <Header />
      <form onSubmit={handleSubmit(getMe)}>
        <Button type="submit" variant="contained" color="secondary">
          Get Me
        </Button>
      </form>
      <form onSubmit={handleSubmit(logOut)}>
        <Button type="submit" variant="contained" color="primary">
          Log Out
        </Button>
      </form>
    </Container>
  )
};*/

export const ProfileScreen: any = compose(
  reduxForm({
    form: 'getMe',
  }),
  reduxForm({
    form: 'logOut',
  }),
  connect(mapStateToProps, mapDispatchToProps))(Profile);
