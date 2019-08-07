import {execute} from 'apollo-link';
import gql from 'graphql-tag';
import link from "../../shared/link";
import {from, Subscribable} from "rxjs";
import {GraphQLResponse} from "../../shared/types/graphql";

class AuthRequestsService {
  login(userLogin: { email: string, password: string }): any {
    const LOG_IN = {
      query: gql`
      mutation logIn($userLogin: LoginInput) {
       login(input: $userLogin) {
        email
        authToken
        status
  }
}
`,
      variables: {userLogin}
    };

    return from(execute(link, LOG_IN) as unknown as Subscribable<GraphQLResponse<{ login: any }>>)
  }
}

export const authRequestsService = new AuthRequestsService();


/*

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
  onCompleted={({login}: any) => {
    localStorage.setItem('token', login.authToken);
    client.writeData({data: {isLoggedIn: true}});
  }}
>
  {(login: any, {loading, error}: any) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return <SingInForm onSubmit={(e: any) => {
      login({
        variables: {
          userLogin: {
            email: e.Email,
            password: e.Password
          }
        }
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

export default singIn*!/*/
