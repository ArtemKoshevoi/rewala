import ApolloClient from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import gql from "graphql-tag"

export const showResults = (values: any) => {
  console.log(values);

  const client = new ApolloClient({
    uri: 'https://rewala-api.2mc.team/graphql',
    headers: {
      "Authorization": "Bauer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjYzNzUyNTYsImlhdCI6MTU2NDY0NzI1Nn0.Ad8FyrYZM2EflWR4nTc87KevcX63kjsAetkSAelFZPE"
    }
  });

  const PERSONS_QUERY = gql`
  {
    profiles{
      fullName
    }
  }
`;

  return (
    <ApolloProvider client={client}>
      <div>
        <Query query={PERSONS_QUERY}>
          {({loading, data}: any) => {
            if(loading) return "Loading...";
            const {profiles} = data;
            return profiles.map((profile: any) => <p>{profile.fullName}</p>)
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
};



