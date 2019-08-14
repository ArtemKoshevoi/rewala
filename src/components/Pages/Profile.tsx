import { Button, Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../shared/components/header';
import { getToken, removeToken } from '../../shared/services/auth.service';
import { RootState } from '../../store';
import { getState } from '../../store/auth-requests/selectors';
import { Actions } from '../../store/auth/actions';

interface ProfileProps {
  getCurrentUser: any
}

const mapStateToProps = (state: RootState) => {
  const {logoutRequest, getMeRequest} = getState(state);
  return {
    logoutRequestState: logoutRequest.data,
    getMeRequestState: getMeRequest.data,
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCurrentUser: () => dispatch(Actions.getCurrentUser()),
  logout: (logoutValue: { FCMToken: string }) => dispatch((Actions.logout(logoutValue))),
});

class Profile extends React.Component<ProfileProps> {
  componentDidMount(): void {
    this.props.getCurrentUser();
  }

  render(): React.ReactNode {
    const {getCurrentUser, logoutRequestState, getMeRequestState, logout}: any = this.props;
    const logOut = (): void => {
      const FCMToken = getToken();
      logout({FCMToken});
    };


    const getMeIsNull = getMeRequestState !== null;

    // if (logoutRequestState !== null && logoutRequestState.data.logout) {
    //   console.log(logoutRequestState);
    //   removeToken(logoutRequestState.data.logout);
    //   if (!getToken()) {
    //     return  (
    //       <Redirect to='/login' />
    //     )
    //   }
    // }

    return (
      <Container>
        <Header/>
        <Button variant='contained' color='secondary' onClick={() => getCurrentUser()}>get me</Button>
        <Button variant='contained' color='primary' onClick={() => logOut()}>log out</Button>
        <div>{getMeIsNull ? getMeRequestState.data.me.profile.fullName : ''}</div>
        <div>{getMeIsNull ? getMeRequestState.data.me.email : ''}</div>
        <div>{getMeIsNull ? getMeRequestState.data.me.profile.phone : ''}</div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
