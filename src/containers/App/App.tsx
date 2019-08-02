import React from 'react';
import './App.css';
import AppRouter from "../../router/appRouter"
import ApolloClient from "apollo-boost";

import {ApolloProvider} from "react-apollo";

//Connecting our site to the GraphQl API
const client = new ApolloClient({
  uri: "https://rewala-api.2mc.team/graphql",
  headers: {
    authorization: localStorage.getItem('token'),
  },
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};

export default App;
