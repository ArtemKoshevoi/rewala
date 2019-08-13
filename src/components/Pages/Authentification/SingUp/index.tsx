import {Container} from '@material-ui/core';
import {gql} from 'apollo-boost';
import React from 'react';
import {ApolloConsumer, Mutation} from 'react-apollo';
import SingUpForm from '../../../../shared/forms/SingUpForm';

class singUp extends React.Component {
  render(): React.ReactNode {

    const SIGN_UP = gql`
      mutation logIn($userLogin: LoginInput) {
       login(input: $userLogin) {
        email
        authToken
        status
  }
}
`;
    return (
      <Container maxWidth={'xs'}>
        <ApolloConsumer>
          {client => (
            <Mutation
              mutation={SIGN_UP}
              onCompleted={({login}: any) => {
                localStorage.setItem('token', login.authToken);
                client.writeData({data: {isLoggedIn: true}});
              }}
            >
              {(login: any, {loading, error}: any) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>An error occurred</p>;

                return <SingUpForm onSubmit={(e: any) => {
                  login({
                    variables: {
                      userLogin: {
                        email: e.Email,
                        password: e.Password,
                      },
                    },
                  });
                }}/>;
              }}
            </Mutation>
          )}
        </ApolloConsumer>
      </Container>
    );
  }
}

export default singUp;