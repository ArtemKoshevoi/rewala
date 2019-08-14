import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../../../store/auth/actions';
import SignInForm from './SignInForm/SignInForm';

interface LoginFormValuesUpperCase {
  Email: string;
  Password: string;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { email: string, password: string }) => dispatch(Actions.login(loginFormValues)),
});

class Login extends React.Component {
  render(): React.ReactNode {
    const {login}: any = this.props;

    const Submit = ({Email: email, Password: password}: any): void => {
      login({email, password});
    };
    return(
      <Container maxWidth={'xs'}>
        <SignInForm onSubmit={Submit}/>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
