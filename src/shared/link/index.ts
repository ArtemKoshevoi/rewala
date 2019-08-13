import { createHttpLink } from 'apollo-link-http';
import { getToken } from '../services/auth.service';

const link = createHttpLink({
  uri: 'https://rewala-api.2mc.team/graphql',
  headers: {
    authorization: 'Bearer ' + getToken(),
  },
});

export default link;
