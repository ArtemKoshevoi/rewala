import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../../shared/components/header/header';
import { LogOutValue } from '../../../shared/interfaces/logout';
import { authService } from '../../../shared/services/auth.service';
import { RootState } from '../../../store';
import { getState } from '../../../store/auth-requests/selectors';
import { Actions } from '../../../store/auth/actions';

const mapStateToProps = (state: RootState) => {
  const {getMeRequest} = getState(state);
  return {
    getMeRequestState: getMeRequest.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: (logoutValue: LogOutValue) => dispatch((Actions.logout(logoutValue))),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Profile: React.FC<Props> = ({getMeRequestState, logout}) => {
  const logOut = () => {
    const auth = authService.getToken().subscribe(FCMToken => logout({FCMToken}));
    auth.unsubscribe();
  };

  const getMeIsNull = getMeRequestState !== null;
  const log = () => logOut();

  return (
    <Container>
      <Header/>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={6}>
          <div>
            <Typography variant='h5' gutterBottom={true}>Name:
              {getMeIsNull ? getMeRequestState.data.me.profile.fullName : ''}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Email:
              {getMeIsNull ? getMeRequestState.data.me.email : ''}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Country Code:
              {getMeIsNull ? getMeRequestState.data.me.profile.countryCode : ''}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Phone:
              {getMeIsNull ? getMeRequestState.data.me.profile.phone : ''}
            </Typography>
          </div>
        </Grid>
        <Grid item={true} xs={6}>
          <Button variant='contained' color='primary' onClick={log}>log out</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
