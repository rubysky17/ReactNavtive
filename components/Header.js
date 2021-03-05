import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import TitleText from "./TitleText";
import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
});

export default Header;
