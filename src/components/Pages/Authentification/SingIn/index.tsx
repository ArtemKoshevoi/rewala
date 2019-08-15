import { Container, FormHelperText } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import SignInForm from './SignInForm/SignInForm';
import { RootState } from '../../../../store';
import { getState } from '../../../../store/auth-requests/selectors';

interface LoginFormValuesUpperCase {
  Email: string;
  Password: string;
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

    const Submit = ({Email: email, Password: password}: any): void => {
      login({email, password});
    };
    return(
      <Container maxWidth={'xs'}>
        <SignInForm onSubmit={Submit} />
        <FormHelperText id='component-error-text' style={{color: 'red', fontSize: '16px'}}>
          {warningMessage}
        </FormHelperText>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
