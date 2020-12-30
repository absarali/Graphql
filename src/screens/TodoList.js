import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

const FETCH_TODOS = gql`
  query {
    todos(order_by: { created_at: desc }) {
      id
      title
    }
  }
`;

const Graphql = ({ navigation }) => {
  const { data, error, loading } = useQuery(FETCH_TODOS);
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
              <Text style={styles.listText}>Description: {item.title}</Text>
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
