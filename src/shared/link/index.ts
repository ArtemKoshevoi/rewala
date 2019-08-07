import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({ uri: "https://rewala-api.2mc.team/graphql" });

export default link;
