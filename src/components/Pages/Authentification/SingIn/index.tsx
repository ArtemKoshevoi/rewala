import React from "react"
import { Container } from "@material-ui/core";
import SingInForm from "../../../../shared/Forms/SingInForm";
import {gql} from "apollo-boost";
import {ApolloConsumer, Mutation} from "react-apollo";

class singIn extends React.Component {

  render(): React.ReactNode {

    const LOG_IN = gql`
      mutation logIn($userLogin: LoginInput) {
       login(input: $userLogin) {
        email
        authToken
        status
  }
}
`;
    return (
      <Container maxWidth={"xs"}>
        <ApolloConsumer>
          {client => (
            <Mutation
              mutation={LOG_IN}
              onCompleted={({ login }: any) => {
                localStorage.setItem('token', login.authToken);
                client.writeData({ data: { isLoggedIn: true } });
              }}
            >
              {(login: any, { loading, error }: any) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>An error occurred</p>;

                return <SingInForm onSubmit={(e: any) => {
                  login({ variables: {userLogin: {
                        email: e.Email,
                        password: e.Password
                      }}});
                }}/>;
              }}
            </Mutation>
          )}
        </ApolloConsumer>
      </Container>
    );
  }
}

export default singIn