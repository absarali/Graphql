import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateTodo = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const INSERT_TODO = gql`
    mutation($text: String!) {
      insert_todos(objects: [{ title: $text }]) {
        returning {
          id
          title
        }
      }
    }
  `;
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
      <TouchableOpacity
      style = {styles.buttonStyle}
        onPress={() => {
          submit();
          navigation.push("TodoList");
        }}
      >
        <Text style = {styles.textStyle}>Add to List</Text>
      </TouchableOpacity>
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
  buttonStyle: {
    alignSelf: 'flex-end',
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    margin: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    padding: 12,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
