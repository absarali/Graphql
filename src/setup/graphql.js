import { HttpLink } from 'apollo-link-http';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from "apollo-cache-inmemory";
const makeApolloClient = () => {
  // create an apollo link instance, a network interface for apollo client
  const link = new HttpLink({
    uri: `https://hasura.io/learn/graphql`,
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDVmZDcyNmU3ZjUxZDlhMDA2ZTg3ZjA0OSJ9LCJuaWNrbmFtZSI6ImFic2FyYWxpNjIxMjMiLCJuYW1lIjoiYWJzYXJhbGk2MjEyM0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNDZlNmRlYjk3YjAxMzdhNzY2YTE5NGMwZjdmMTIyOTQ_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhYi5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMC0xMi0yOVQxNjo0MzoyMS44NjlaIiwiaXNzIjoiaHR0cHM6Ly9ncmFwaHFsLXR1dG9yaWFscy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWZkNzI2ZTdmNTFkOWEwMDZlODdmMDQ5IiwiYXVkIjoiUDM4cW5GbzFsRkFRSnJ6a3VuLS13RXpxbGpWTkdjV1ciLCJpYXQiOjE2MDkzMjI4NzQsImV4cCI6MTYwOTM1ODg3NCwiYXRfaGFzaCI6IldoamphSlZyTlNLeWR5dFhVUjRjTEEiLCJub25jZSI6IndqcVZ4MlphZnI5Wm9LaFlRZUE2eDNZdUpSb0RMcS5sIn0.K7rinZGyMwNaZan1OLGYbL1b7ejJwUrX_Sh-VXUrk-gmA5GdPPCvvKERB7Ow7QsrxLbcUXjliUuokA1IZrik7bog8O_ngZTGNMeHYK0VoQue2c-fG4T7E0hCbBO9goh14leXLZKALIADQJOb1g6P5Z03jwu7DcPrQwk851lfwNdA22PMPOX5dwaMlCLyFZg3Y5slzP2a689RZlB0t1U6ZWkK_LBWana4yFlmccZuO7MpH4k6_MvbEvNEjyWcdZfJhGIkreTaFI0mdt5q01Yi1_TSrAM8Up9yAg8OhKNbls2p-UB6aLdAgDDiL_TNay6oM3LsBc_BMwC-cMgcxUsmUg`
    }
  });
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
