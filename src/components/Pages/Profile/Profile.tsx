import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../../shared/components/header/header';
import { AuthToken } from '../../../shared/interfaces/authToken';
import { authService } from '../../../shared/services/auth.service';
import { Actions } from '../../../store/auth/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: (logoutValue: AuthToken) => dispatch((Actions.logout(logoutValue))),
});

type Props =
  // & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Profile: React.FC<Props> = ({logout}) => {
  const logOut = () => {
    const auth = authService.getToken().subscribe(FCMToken => logout({FCMToken}));
    auth.unsubscribe();
  };

  const log = () => logOut();

  return (
    <Container>
      <Header/>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={6}>
          <div>
            <Typography variant='h5' gutterBottom={true}>Name:
              {}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Email:
              {}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Country Code:
              {}
            </Typography>
            <Typography variant='h6' gutterBottom={true}>Phone:
              {}
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

export default connect(null, mapDispatchToProps)(Profile);
