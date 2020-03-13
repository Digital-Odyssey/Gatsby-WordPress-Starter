import fetch from "isomorphic-fetch";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Wraps the entire Gatsby app with Apollo.
export const wrapRootElement = ({ element }) => {
  // Register a new Apollo client.
  const client = new ApolloClient({
    fetch,
    // Change this to your GraphQL endpoint.
    uri: "http://gatsbywpstarter.local/graphql",
  });

  // Wrap the element.
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
