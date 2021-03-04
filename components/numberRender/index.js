import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../../const/Colors";

const NumberRender = ({ number }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  number: {
    padding: 20,
    backgroundColor: Color.numberBgColor,
    color: "white",
    fontSize: 20,
    borderRadius: 15,
  },
});
export default NumberRender;
