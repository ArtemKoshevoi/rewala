import { Container, FormHelperText, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { RootState } from '../../../../store';
import { getState } from '../../../../store/auth-requests/selectors';
import { Actions } from '../../../../store/auth/actions';
import LoginForm from './LoginForm';

interface LoginFormValues {
  email: string;
  password: string;
}

const mapStateToProps = (state: RootState) => {
  const {loginRequest} = getState(state);
  return {
    loginRequestState: loginRequest.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { email: string, password: string }) => dispatch(Actions.login(loginFormValues)),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

const Login: React.FC<Props> = ({loginRequestState, login}) => {
  let warningMessage = '';
  if (loginRequestState && loginRequestState.hasOwnProperty('errors')) {
      warningMessage = 'Wrong email or password';
    }
  const Submit = ({email, password}: LoginFormValues) => {
      login({email, password});
    };
  return (
      <Container maxWidth={'xs'}>
        <LoginForm onSubmit={Submit}/>
        <FormHelperText id='component-error-text' style={{color: 'red', fontSize: '16px'}}>
          {warningMessage}
        </FormHelperText>
        <Grid container={true}>
          <Grid item={true} xs={true}>
            <Link to='#'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item={true}>
            <Link to='/registration'>
              {'Don\'t have an account? Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
