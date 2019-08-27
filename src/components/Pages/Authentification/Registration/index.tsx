import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { UserInput } from '../../../../shared/interfaces/userInput';
import { Actions } from '../../../../store/auth/actions';
import SingUpForm from './RegistrationForm';
import { useStyles } from './style';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registration: (registrationFormValues: UserInput) => dispatch(Actions.registration(registrationFormValues)),
  getConfig: () => dispatch(Actions.getConfig()),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>;

const Registration: React.FC<Props> = ({registration, getConfig}) => {
  const classes = useStyles();
  useEffect(() => {
    getConfig();
  }, [getConfig]);

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
