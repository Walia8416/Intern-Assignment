import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/header";
import { SliderBox } from "react-native-image-slider-box";
import Box from "../components/buttons";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";
import { grocery } from "../data";

export default function HomeScreen() {
  const [val, setVal] = useState("");
  const [load, setLoad] = useState(false);
  const [arr, setArr] = useState(grocery);
  const [counter, setCounter] = useState(1);


  const searchFunction = (text) => {
    setVal(text)
    const newData = grocery.filter( item => {
      if (item.id <= counter) {
        const itemData = item.title.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      }
    });
    setArr(newData)

  };
  const listSeparator = () => {
      return (
        <View
          style={{
            height: 14,
          }}
        />
      );
    };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Header onChangeText={(text) => searchFunction(text)} value={val}/>
        <TouchableOpacity onPress={() => {setCounter(counter+1);setArr(grocery);}}>
          <Ionicons
            name="add-circle-outline"
            color="white"
            size={35}
            style={{ top: 13, left: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ top: 70, padding: 20, height: 600 }}>
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            (item.id <= counter) ? (
              <ListItem
                key={item.id}
                containerStyle={{
                  backgroundColor: "#3C4042",
                  width: 300,
                  borderRadius: 10,
                  left: 10,
                }}
              >
                <ListItem.Content
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ListItem.Title style={{ color: "white" }}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ):null
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => listSeparator()}
        />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
  },
});
