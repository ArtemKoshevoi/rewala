import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../shared/components/header';
import { RootState } from '../../store';
import { getIsAuthorized } from '../../store/auth/selectors';

interface HomePageProps {
  requestState: any;
}

const mapStateToProps = (state: RootState) => ({
  requestState: getIsAuthorized(state),
});

class HomePage extends React.Component<HomePageProps> {
  render(): React.ReactNode {
    return (
      <Container>
        <Header/>
        <div>
          <h2>Home Page</h2>
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(HomePage);