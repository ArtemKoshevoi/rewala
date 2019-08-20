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

type Props =
  & ReturnType<typeof mapDispatchToProps>;

const Registration: React.FC<Props> = ({registration}) => {
  const Submit = (values: any) => {
      const payload = {
        email: values.email,
        password: values.password,
        isAgreeWithPrivacyPolicyAndTermOfUse: values.policy || false,
        profileInput: {
          fullName: values.fullName || null,
          phone: values.phone || null,
          countryCode: values.countryCode || null,
          notifications: true,
        },
      };
      registration(payload);
    };
  return (
      <Container maxWidth={'xs'}>
        <SingUpForm onSubmit={Submit}/>
      </Container>
    );
};

export default connect(null, mapDispatchToProps)(Registration);
