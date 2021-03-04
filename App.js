import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screen/startGameScreen";
import GameScreen from "./screen/gameScreen";
import GameOverScreen from "./screen/gameOverScreen";

const App = () => {
  const [isOver, setIsOver] = useState(false);
  const [numberUser, setNumberUser] = useState();
  const [numberCount, setNumberCount] = useState(0);
  const [listNumberRandom, setListNumberRandom] = useState([]);

  const handleGameStart = (input) => {
    setNumberUser(input);
    setIsOver(false);
    setListNumberRandom([]);
  };

  const handleIsOver = (list) => {
    setIsOver(true);
    setNumberCount(0);
    setNumberUser(0);
    setListNumberRandom(list);
  };

  const handleNumberCount = (number) => {
    setNumberCount(number);
  };

  const handleListNumber = (list) => {
    setListNumberRandom(list);
  };

  let content = <StartGameScreen onStartGame={handleGameStart} />;

  if (!isOver && numberUser) {
    content = (
      <GameScreen
        userChoice={numberUser}
        onIsOver={handleIsOver}
        onNumberCount={handleNumberCount}
      />
    );
  }

  if (isOver) {
    content = (
      <GameOverScreen
        onStartGame={handleGameStart}
        numberCount={numberCount}
        listNumber={listNumberRandom}
      />
    );
  }

  return (
    <View style={styles.app}>
      <Header title="ĐOÁN SỐ" />
      <View style={styles.content}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
