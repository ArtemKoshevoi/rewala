import {createHttpLink} from "apollo-link-http";

const link = createHttpLink({
  uri: "https://rewala-api.2mc.team/graphql",
  headers: {
    authorization: "Baurer " + localStorage.getItem('token'),
  },
});

export default link;
