import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/header/Header";
import StartGameScreen from "./components/screen/StartGameScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header title="Đoán số" />

        <StartGameScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
