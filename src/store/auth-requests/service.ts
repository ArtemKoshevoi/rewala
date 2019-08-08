import {execute} from 'apollo-link';
import gql from 'graphql-tag';
import link from "../../shared/link";
import {from, Subscribable} from "rxjs";
import {GraphQLResponse} from "../../shared/types/graphql";

class AuthRequestsService {
  login(userLogin: { email: string, password: string }) {
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

  getMe() {
    const GET_ME = {
      query: gql`
        query getMe {
          me{
            email
            profile{
              fullName
              phone
    }
  }
        }
      `,
    };

    return from(execute(link, GET_ME) as unknown as Subscribable<GraphQLResponse<{ me: any }>>)
  }
}

export const authRequestsService = new AuthRequestsService();