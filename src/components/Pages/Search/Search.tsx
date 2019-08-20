import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../../../shared/components/header/header';

const Search: React.FC = () => {
  return (
    <Container>
      <Header/>
      <div>
        <h2>Search</h2>
      </div>
    </Container>
  );
};

export default Search;