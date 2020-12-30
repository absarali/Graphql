import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTodo from "./src/screens/CreateTodo";
import TodoList from "./src/screens/TodoList";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./src/setup/graphql";
const Stack = createStackNavigator();

export default () => {
//   const [setup, setSetup] = useState(null);
//   useEffect(() => {
//     setSetup(client());
//   }, []);
//   if (!setup) {
//     return <Text>No client</Text>;
//   }
  return (
    <ApolloProvider client={client()}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
          <Stack.Screen name="CreateTodo" component={CreateTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
