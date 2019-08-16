import { Button, Container, FormHelperText, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import SignInForm from './LoginForm/LoginForm';
import { RootState } from '../../../../store';
import { getState } from '../../../../store/auth-requests/selectors';
import { Link } from 'react-router-dom';

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

class Login extends React.Component {
  render(): React.ReactNode {
    let warningMessage = '';
    const {loginRequestState}: any = this.props;
    if (loginRequestState && loginRequestState.hasOwnProperty('errors')){
      warningMessage = 'Wrong email or password';
    }
    const {login}: any = this.props;

    const Submit = ({email, password}: any): void => {
      login({email, password});
    };
    return(
      <Container maxWidth={'xs'}>
        <SignInForm onSubmit={Submit} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
