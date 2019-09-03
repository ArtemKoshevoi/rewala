import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../../shared/components/header/header';
import { AuthToken } from '../../../shared/interfaces/authToken';
import { authService } from '../../../shared/services/auth.service';
import { RootState } from '../../../store';
import { Actions } from '../../../store/auth/actions';
import { getUser } from '../../../store/users/selectors';

const mapStateToProps = (state: RootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: (logoutValue: AuthToken) => dispatch((Actions.logout(logoutValue))),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Profile: React.FC<Props> = ({logout, user}) => {
  const logOut = () => {
    const auth = authService.getToken().subscribe(FCMToken => logout({FCMToken}));
    auth.unsubscribe();
  };

  console.log(user);

  const log = () => logOut();

  return (
    <Container>
      <Header/>
      <Grid container={true} spacing={3}>
          <Button variant='contained' color='primary' onClick={log}>log out</Button>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
