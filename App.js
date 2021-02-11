import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header/Header";
import GameScreen from "./components/screen/GameScreen";
import StartGameScreen from "./components/screen/StartGameScreen";
import GameOverScreen from "./components/screen/GameOverScreen";
const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [isOver, setIsOver] = useState(false);
  const [turnNumber, setTurnNumber] = useState(0);

  const stateGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const isOverHandler = () => {
    setIsOver(true);
  };

  const isReStart = () => {
    setIsOver(false);
    setTurnNumber(0);
    setUserNumber(null);
  };

  const turnNumberHandler = () => {
    setTurnNumber(turnNumber + 1);
  };

  let content = <StartGameScreen onStartGame={stateGameHandler} />;

  if (userNumber && !isOver) {
    content = (
      <GameScreen
        soNguoiDungChon={userNumber}
        onIsOverHandler={isOverHandler}
        onHandleTurnNumber={turnNumberHandler}
      />
    );
  } else if (userNumber && isOver) {
    content = (
      <GameOverScreen
        numberChoice={userNumber}
        turn={turnNumber}
        onRestart={isReStart}
      />
    );
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
