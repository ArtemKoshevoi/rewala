import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { RegistrationFormValues } from '../../../../shared/interfaces/registrationFormValues';
import { Actions as authActions } from '../../../../store/auth/actions';
import SingUpForm from './RegistrationForm';
import { useStyles } from './style';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registration: (registrationFormValues: RegistrationFormValues) => dispatch(authActions.registration(registrationFormValues)),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>;

const Registration: React.FC<Props> = ({registration}) => {
  const classes = useStyles();

  const Submit = (values: RegistrationFormValues) => {
    const payload = {
      email: values.email,
      password: values.password,
      isAgreeWithPrivacyPolicyAndTermOfUse: values.isAgreeWithPrivacyPolicyAndTermOfUse,
      profileInput: values.profileInput,
    };
    registration(payload);
  };
  return (
    <Container maxWidth={'xs'}>
      <SingUpForm onSubmit={Submit}/>
      <Grid container={true}>
        <Grid item={true} xs={12} className={classes.grid}>
          <Link to='/login'>
            {'Already have an account? Log in'}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(Registration);
