import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, SearchBar } from "react-native-elements";

export default function Header({ onChangeText, value }) {
  return (
    <SearchBar
      placeholder="Type Here..."
      darkTheme
      round
      containerStyle={{
        width: 300,
        borderRadius: 15,
        backgroundColor: "#121212",
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFEFE",
    // height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 10,
    //borderRadius: 10,
    top: 15,
    marginTop: Platform.OS === "android" ? 25 : 0,
    minHeight: 65,
    elevation: 10,

    // maxHeight: 186 / 4,
  },
  heading: {
    fontSize: 20,
    top: 10,
    color: "#4E8BA7",
  },
});
