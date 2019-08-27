import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { LogOutValue } from '../../shared/interfaces/logOutValue';
import { Countries, InputValue, MeValues, RegistrationValues } from '../../shared/interfaces/services';
import { UserInput } from '../../shared/interfaces/userInput';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';

class AuthRequestsService {
  login(userLogin: { email: string, password: string }) {
    const LOG_IN = {
      query: gql`
                mutation logIn($userLogin: LoginInput) {
                    login(input: $userLogin) {
                        authToken
                    }
                }
            `,
      variables: {userLogin},
    };

    return from(execute(link, LOG_IN) as unknown as Subscribable<GraphQLResponse<{ login: InputValue }>>)
        .pipe(responseInterceptor('login'));
    }

  getMe() {
    const GET_ME = {
      query: gql`
                query getMe {
                    me{
                        _id
                    }
                }
            `,
    };

    return from(execute(link, GET_ME) as unknown as Subscribable<GraphQLResponse<{ me: MeValues }>>)
    .pipe(responseInterceptor('me'));
  }

  logout(token: { FCMToken: string }) {
    const LOG_OUT = {
      query: gql`
                mutation logOut($token: LogOutInput){
                    logout(input: $token)
                }
            `,
      variables: {token},
    };

    return from(execute(link, LOG_OUT) as unknown as Subscribable<GraphQLResponse<{ logout: LogOutValue }>>);
  }

  registration(userInput: UserInput) {
    const REGISTRATION = {
      query: gql`
                mutation Registration($userInput: UserInput) {
                    registration(input: $userInput) {
                        email
                        authToken
                        status
                    }
                }
            `,
      variables: {userInput},
    };
    return from(execute(link, REGISTRATION) as unknown as Subscribable<GraphQLResponse<{ registration: RegistrationValues }>>);
  }

  getConfig() {
    const GET_CONFIG = {
      query: gql`
                query getConfig {
                    config{
                        countries{
                            name,
                            code
                        }
                    }
                }
            `,
    };

    return from(execute(link, GET_CONFIG) as unknown as Subscribable<GraphQLResponse<{ config: Countries }>>);
  }
}

export const authRequestsService = new AuthRequestsService();