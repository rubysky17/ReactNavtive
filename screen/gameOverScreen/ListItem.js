import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={{ height: 50, width: 30 }}>
      <Text style={{ color: "red", fontSize: 20 }}>{item}</Text>
    </View>
  );
};

export default ListItem;
