import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import typeDefs from './graphql/typeDefs';

const defaults = {
};

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {
    Query: {},
    Mutation: {},
  },
  typeDefs,
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    // new HttpLink({ uri: window.location.hostname === 'localhost' ? 'https://staging.neverfapdeluxe.com/graphql' : 'https://staging.neverfapdeluxe.com/graphql' }) // http://localhost:2001/graphql
    // new HttpLink({ uri: 'http://localhost:2001/graphql' }) // 
    new HttpLink({ uri: 'https://staging.neverfapdeluxe.com/graphql' }) // 
  ]),
  fetchOptions: {
    mode: 'no-cors',
  },
});

export default client;

