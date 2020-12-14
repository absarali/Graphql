import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateTodo from "./src/screens/CreateTodo";
import ShowTodo from "./src/screens/ShowTodo";
import TodoList from "./src/screens/TodoList";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
        <Stack.Screen name="ShowTodo" component={ShowTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
