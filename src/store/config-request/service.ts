import { execute } from 'apollo-link';
import gql from 'graphql-tag';
import { from, Subscribable } from 'rxjs';
import { CountriesConfigValues } from '../../shared/interfaces/countriesConfigValues';
import link from '../../shared/link';
import { GraphQLResponse } from '../../shared/types/graphql';
import { responseInterceptor } from '../utils/response-interceptor';

class CountriesConfigRequestService {
  getConfig() {
    const GET_CONFIG = {
      query: gql`
        query getConfig {
          config{
            countries{
              name
              code
              _id
              shortName
            }
          }
        }
      `,
    };

    return from(execute(link, GET_CONFIG) as unknown as Subscribable<GraphQLResponse<{ config: CountriesConfigValues }>>)
    .pipe(responseInterceptor('config'));
  }
}

export const countriesConfigRequestService = new CountriesConfigRequestService();