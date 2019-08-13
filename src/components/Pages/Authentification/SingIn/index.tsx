import { Button, Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { RootState } from '../../../../store';
import { Actions } from '../../../../store/auth/actions';
import { getState } from '../../../../store/auth/selectors';
import { renderTextField } from './style';

interface LoginFormValuesUpperCase {
  Email: string;
  Password: string;
}

const mapStateToProps = (state: RootState) => {
  const {loginRequest} = getState(state);
  return {requestState: loginRequest.data};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: { email: string, password: string }) => dispatch(Actions.login(loginFormValues)),
});

class Screen extends React.Component {
  render(): React.ReactNode {
    const {handleSubmit, submitting, pristine, login, requestState}: any = this.props;

    const onSubmit = ({Email: email, Password: password}: LoginFormValuesUpperCase) => {
      login({email, password});
    };
    //
    // if (requestState !== null) {
    //   console.log(requestState.data.login);
    //   return  (
    //       <Redirect to='/' />
    //     );
    // }

    // if (requestState !== null) {
    //   console.log(222, requestState);
    //   return  (
    //     <Redirect to='/' />
    //   )
    // }

    return (
      <Container maxWidth={'xs'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <Field
                name='Email'
                component={renderTextField}
                label='Email'
              />
            </div>
            <div>
              <Field
                name='Password'
                component={renderTextField}
                label='Password'
              />
            </div>
          </div>
          <div>
            <Button
              fullWidth={true}
              type='submit'
              variant='contained'
              color='primary'
              disabled={pristine || submitting}
            >
              Sing In
            </Button>
          </div>
        </form>
      </Container>
    );
  }
}

export const LoginScreen: any = compose(
  reduxForm({
    form: 'singIn',
  }), connect(mapStateToProps, mapDispatchToProps))(Screen);
