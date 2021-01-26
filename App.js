import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./components/header/Header";
import GameScreen from "./components/screen/GameScreen";
import StartGameScreen from "./components/screen/StartGameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const stateGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={stateGameHandler} />;

  if (userNumber) {
    content = <GameScreen soNguoiDungChon={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Đoán số abc" />

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
