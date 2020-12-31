import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo, AntDesign } from "@expo/vector-icons";
LogBox.ignoreAllLogs()
const FETCH_TODOS = gql`
  subscription {
    todos(
      order_by: { created_at: desc }
      where: { is_public: { _eq: false } }
    ) {
      id
      title
    }
  }
`;
const REMOVE_TODO = gql`
  mutation deleteTodo($id: Int) {
    delete_todos (
      where: {
        id: {
          _eq: $id
        }
      }
    ) {
      affected_rows
    }
  }
  `
  const updateCache = (client) => {
    const data = client.readQuery({
      query: FETCH_TODOS,
      variables: {
        isPublic
      }
    });
    const newData = {
      todos: data.todos.filter((t) => t.id !== item.id)
    }
    client.writeQuery({
      query: FETCH_TODOS,
      variables: {
        isPublic
      },
      data: newData
    });
  }
const Graphql = ({ navigation }) => {
  const { data, error, loading } = useSubscription(FETCH_TODOS);
  const [deleteTodo, { loading: deleting, error: deleteError }] = useMutation(REMOVE_TODO);
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.push("CreateTodo");
        }}
      >
        <Entypo
          style={styles.addIcon}
          name="add-to-list"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.todos}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listView}>
              <Text style={styles.listText}>{item.title}</Text>
              <TouchableOpacity
              onPress = { () => {
                deleteTodo({
                  variables: { id: item.id },
                  update: updateCache
                });
              }}
              >
              <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Graphql;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  addIcon: {
    alignSelf: "flex-end",
    marginRight: 15,
    marginVertical: 10,
  },
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
  },
  listText: {
    fontSize: 16,
  },
});
