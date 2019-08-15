import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../../shared/components/header/header';
import { RootState } from '../../../store';
import { getState } from '../../../store/auth-requests/selectors';
import { Actions } from '../../../store/auth/actions';
import { authService } from '../../../shared/services/auth.service';

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
  componentDidMount(): void {
    this.props.getCurrentUser();
  }

  render(): React.ReactNode {
    const {getMeRequestState, logout}: any = this.props;
    const logOut = (): void => {
      const auth = authService.getToken().subscribe(FCMToken => logout({FCMToken}));
      auth.unsubscribe();
    };

    const getMeIsNull = getMeRequestState !== null;
    const log = () => logOut();

    return (
      <Container>
        <Header/>
        <Grid container={true} spacing={3}  alignItems='center' >
          <Grid item={true} xs={12} sm={6}>
            <div>
              <Typography variant='h5' gutterBottom={true}>
                {getMeIsNull ? getMeRequestState.data.me.profile.fullName : ''}
              </Typography>
              <Typography variant='h6' gutterBottom={true}>
                {getMeIsNull ? getMeRequestState.data.me.email : ''}
              </Typography>
              <Typography variant='h6' gutterBottom={true}>
                {getMeIsNull ? getMeRequestState.data.me.profile.phone : ''}
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <Button variant='contained' color='primary' onClick={log}>log out</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
