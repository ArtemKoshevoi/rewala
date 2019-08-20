import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../../../shared/components/header/header';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header/>
      <div>
        <h2>Home Page</h2>
      </div>
    </Container>
  );
};

export default HomePage;