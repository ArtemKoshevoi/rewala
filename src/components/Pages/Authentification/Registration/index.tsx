import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UserInput } from '../../../../shared/Interfaces';
import { Actions } from '../../../../store/auth/actions';
import SingUpForm from './RegistrationForm';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registration: (registrationFormValues: UserInput) => dispatch(Actions.registration(registrationFormValues)),
});

class Registration extends React.Component {
  render(): React.ReactNode {
    const {registration}: any = this.props;

    const Submit = (values: any) => {
      const payload = {
        email: values.email,
        password: values.confirmPassword,
        isAgreeWithPrivacyPolicyAndTermOfUse: values.police || false,
        profileInput: {
          fullName: values.fullname || null,
          phone: values.phone_number || null,
          countryCode: (values.code && values.code.value) || null,
        },
      };
      registration(payload);
    };
    return (
      <Container maxWidth={'xs'}>
        <SingUpForm onSubmit={Submit}/>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Registration);
