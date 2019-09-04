import { Button, Container, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from '../../../shared/components/header/header';
import { RootState } from '../../../store';
import { Actions } from '../../../store/auth/actions';
import { getUser } from '../../../store/users/selectors';

const mapStateToProps = (state: RootState) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch((Actions.logout())),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Profile: React.FC<Props> = ({logout, user}) => {
  // console.log(user);

  const log = () => logout();

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
