// import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';

import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from "apollo-cache-inmemory";
const makeApolloClient = () => {
  // create an apollo link instance, a network interface for apollo client
  // const link = new HttpLink({
  //   uri: `https://hasura.io/learn/graphql`,
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });
  const link = new WebSocketLink({
    uri: `wss://hasura.io/learn/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer {token}`
        }
      }
    }
  })
  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache()
  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache
  });
  return client;
}
export default makeApolloClient;
