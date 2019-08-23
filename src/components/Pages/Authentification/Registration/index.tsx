import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UserInput } from '../../../../shared/Interfaces';
import { RootState } from '../../../../store';
import { getState } from '../../../../store/auth-requests/selectors';
import { Actions } from '../../../../store/auth/actions';
import SingUpForm from './RegistrationForm';

interface ProfileInput {
  fullName: string;
  phone?: string;
  countryCode?: string;
  notifications?: boolean;
}

interface SubmitProps extends UserInput{
  email: string;
  password: string;
  policy: boolean;
  fullName: string | null;
  phone: string | null;
  countryCode: string | null;
}

const mapStateToProps = (state: RootState) => {
  const {getConfigRequest} = getState(state);
  return {
    getConfigRequestState: getConfigRequest.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registration: (registrationFormValues: UserInput) => dispatch(Actions.registration(registrationFormValues)),
  getConfig: () => dispatch(Actions.getConfig()),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>;

const Registration: React.FC<Props> = ({registration, getConfig, getConfigRequestState}) => {
  useEffect(() => {
    getConfig();
  }, [getConfig]);

  const countriesCode = getConfigRequestState && getConfigRequestState.data.config.countries;

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

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
