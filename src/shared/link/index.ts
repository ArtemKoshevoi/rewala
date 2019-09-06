import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { map } from 'rxjs/operators';
import { Config } from '../../environments/environment';
import { authService } from '../services/auth.service';

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