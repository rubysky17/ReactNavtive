import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../const/Colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: Color.headerColor,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: Color.headerTitle, fontSize: 30 },
});

export default Header;
