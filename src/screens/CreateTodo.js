import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

const CreateTodo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(newValue) => setTitle(newValue)}
        style={styles.name}
      />
      <Text style={styles.text}>Description:</Text>
      <TextInput
        value={description}
        onChangeText={(newValue) => setDescription(newValue)}
        style={styles.description}
      />
      <Button
        title="Add-to-List"
        onPress={() => {
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
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "silver",
    marginBottom: 10,
  },
});
