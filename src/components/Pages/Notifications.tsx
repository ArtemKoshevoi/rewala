import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../../shared/components/header/header';

class Notifications extends React.Component {
  render(): React.ReactNode {
    return (
      <Container>
        <Header/>
        <div>
          <h2>Notifications</h2>
        </div>
      </Container>

    );
  }
}

export default Notifications;