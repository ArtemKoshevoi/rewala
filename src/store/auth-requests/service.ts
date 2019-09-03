import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { AuthToken } from '../../shared/interfaces/authToken';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { UserInput } from '../../shared/interfaces/userInput';
import { UserValues } from '../../shared/interfaces/userValues';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';

class AuthRequestsService {
  login(userLogin: LoginFormValues) {
    const LOG_IN = {
      query: gql`
        mutation logIn($userLogin: LoginInput) {
          login(input: $userLogin) {
            _id
            authToken
            email
            status
          }
        }
      `,
      variables: {userLogin},
    };

    return from(execute(link, LOG_IN) as unknown as Subscribable<GraphQLResponse<{ login: UserValues}>>)
        .pipe(responseInterceptor('login'));
    }

  logout(token: AuthToken) {
    const LOG_OUT = {
      query: gql`
        mutation logOut($token: LogOutInput){
          logout(input: $token)
        }
      `,
      variables: {token},
    };

    return from(execute(link, LOG_OUT) as unknown as Subscribable<GraphQLResponse<{ logout: AuthToken }>>)
    .pipe(responseInterceptor('logout'));
  }

  registration(userInput: UserInput) {
    const REGISTRATION = {
      query: gql`
        mutation Registration($userInput: UserInput) {
          registration(input: $userInput) {
            authToken
          }
        }
      `,
      variables: {userInput},
    };

    return from(execute(link, REGISTRATION) as unknown as Subscribable<GraphQLResponse<{ registration: AuthToken }>>)
    .pipe(responseInterceptor('registration'));
  }
}

export const authRequestsService = new AuthRequestsService();