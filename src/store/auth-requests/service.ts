import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { AuthToken } from '../../shared/interfaces/authToken';
import { LoginFormValues } from '../../shared/interfaces/loginFormValues';
import { RegistrationFormValues } from '../../shared/interfaces/registrationFormValues';
import { User } from '../../shared/interfaces/user';
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

    return from(execute(link, LOG_IN) as unknown as Subscribable<GraphQLResponse<{ login: User}>>)
        .pipe(responseInterceptor('login'));
    }

  logout() {
    const LOG_OUT = {
      query: gql`
        mutation {
          logout(input: {FCMToken: ""})
        }
      `,
    };

    return from(execute(link, LOG_OUT) as unknown as Subscribable<GraphQLResponse<{ logout: AuthToken }>>)
    .pipe(responseInterceptor('logout'));
  }

  registration(userInput: RegistrationFormValues) {
    const REGISTRATION = {
      query: gql`
        mutation Registration($userInput: UserInput) {
          registration(input: $userInput) {
            _id
            authToken
            email
            status
          }
        }
      `,
      variables: {userInput},
    };

    return from(execute(link, REGISTRATION) as unknown as Subscribable<GraphQLResponse<{ registration: User }>>)
    .pipe(responseInterceptor('registration'));
  }
}

export const authRequestsService = new AuthRequestsService();