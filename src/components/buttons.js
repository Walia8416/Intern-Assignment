import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Box({title}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="badminton" size={25} color="white" />
      <Text style={{ color: "white",fontSize:12 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5CA597",
    width: 90,
    height: 90,
    borderRadius: 10,
    padding: 10,
    alignItems:"center",
    justifyContent: 'space-around'
  },
});
