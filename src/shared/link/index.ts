import { setContext } from 'apollo-link-context';
import { map } from 'rxjs/operators';
import { authService } from '../services/auth.service';
import { Config } from '../../environments/environment';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

const authMiddleware = setContext(() => {
  return authService.getToken()
  .pipe(
    map(userToken => {
      return {
        headers: {
          authorization: `Bearer ${userToken}` || null,
        },
      };
    }),
  ).toPromise();
});

const httpLink = createHttpLink({
  uri: Config.apiEndpoint,
});

const link = ApolloLink.from([
  authMiddleware,
  httpLink,
]);

export default link;