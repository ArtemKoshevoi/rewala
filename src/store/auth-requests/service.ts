import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { Countries, InputValue, LogOutValue, MeValues, RegistrationValues, UserInput } from '../../shared/Interfaces';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';

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
          variables: {userLogin},
        };

        return from(execute(link, LOG_IN) as unknown as Subscribable<GraphQLResponse<{ login: InputValue }>>);
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
                            countryCode
                        }
                    }
                }
            `,
        };

        return from(execute(link, GET_ME) as unknown as Subscribable<GraphQLResponse<{ me: MeValues }>>);
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