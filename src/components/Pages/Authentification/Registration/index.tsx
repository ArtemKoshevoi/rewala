import { Button, Container, FormHelperText, Grid } from '@material-ui/core';
import React from 'react';
import SingUpForm from './RegistrationForm';

class Registration extends React.Component {
  render(): React.ReactNode {
    return (
      <Container maxWidth={'xs'}>
        <SingUpForm />
      </Container>
    );
  }
}

export default Registration;
