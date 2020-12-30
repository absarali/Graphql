import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";


const CreateTodo = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const INSERT_TODO =  gql`
  mutation ($text: String!){
   insert_todos (
     objects: [{
       title: $text,
     }]
   ){
     returning {
       id
       title
     }
   }
 }
  `
  const submit = () => {
    insertTodo({
      variables: { text: description },
    });
  };
  const [insertTodo, { loading, error }] = useMutation(INSERT_TODO);
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Description:</Text>
      <TextInput
        value={description}
        onChangeText={(newValue) => setDescription(newValue)}
        style={styles.description}
      />
      <Button
        title="Add-to-List"
        onPress={() => {  
          submit()
          navigation.push("TodoList");
        }}
      />
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: "5%",
  },
  text: {
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "silver",
    marginBottom: 20,
  },
  description: {
    padding: 10,
    borderWidth: 1,
    borderColor: "silver",
    marginBottom: 10,
  },
});
