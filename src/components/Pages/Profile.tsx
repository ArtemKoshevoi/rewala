import { Button, Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../shared/components/header';
import { getToken } from '../../shared/services/auth.service';
import { RootState } from '../../store';
import { getState } from '../../store/auth-requests/selectors';
import { Actions } from '../../store/auth/actions';

interface ProfileProps {
  getCurrentUser: any;
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
  // componentDidMount(): void {
  //   this.props.getCurrentUser();
  // }

  render(): React.ReactNode {
    const {getCurrentUser, logoutRequestState, getMeRequestState, logout}: any = this.props;
    const logOut = (): void => {
      const FCMToken = getToken();
      logout({FCMToken});
    };

    const getMeIsNull = getMeRequestState !== null;
    console.log(getMeRequestState);
    const getUser = () => getCurrentUser();
    const log = () => logOut();

    return (
      <Container>
        <Header/>
        <Button variant='contained' color='secondary' onClick={getUser}>get me</Button>
        <Button variant='contained' color='primary' onClick={log}>log out</Button>
        <div>{getMeRequestState ? getMeRequestState.data.me.profile.fullName : ''}</div>
        <div>{getMeRequestState ? getMeRequestState.data.me.email : ''}</div>
        <div>{getMeRequestState ? getMeRequestState.data.me.profile.phone : ''}</div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
