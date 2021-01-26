import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../card/Card";
import Colors from "../../constants/colors";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is start game</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput placeholder="input here" />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.accent} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    marginVertical: 20,
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
    borderRadius: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  button: {
    width: 100,
  },
});

export default StartGameScreen;
