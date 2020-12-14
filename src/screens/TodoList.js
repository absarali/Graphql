import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TodoList = ({ navigation }) => {
  const [data, setData] = useState([
    {
      name: "Todo 1",
      Description: "This is my Todo 1",
    },
    {
      name: "Todo 2",
      Description: "This is my Todo 2",
    },
    {
      name: "Todo 3",
      Description: "This is my Todo 3",
    },
    {
      name: "Todo 4",
      Description: "This is my Todo 4",
    },
    {
      name: "Todo 5",
      Description: "This is my Todo 5",
    },
    {
      name: "Todo 6",
      Description: "This is my Todo 6",
    },
    {
      name: "Todo 7",
      Description: "This is my Todo 7",
    },
    {
      name: "Todo 8",
      Description: "This is my Todo 8",
    },
  ]);

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        keyExtractor={(name) => data.name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatList}>
              <View style={styles.flexView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push("ShowTodo");
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    let array = [...data];
                    let index = array.indexOf(item);
                    array.splice(index, 1);
                    setData([...array]);
                    console.log(data);
                  }}
                >
                  <AntDesign name="delete" size={24} color="#007aff" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.navigationButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.push("CreateTodo");
          }}
        >
          <Entypo name="add-to-list" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  flatList: {
    flexDirection: "column",
    marginVertical: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  flexView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  navigationButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
