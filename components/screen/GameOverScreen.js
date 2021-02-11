import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = ({ numberChoice, turn, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trò chơi kết thúc</Text>
      <Text style={styles.number}>Con số bạn chọn là: {numberChoice}</Text>
      <Text style={styles.number}>Số lượt là: {turn}</Text>
      <Button
        title="Chơi lại"
        onPress={() => {
          onRestart();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  number: {
    marginTop: 5,
    fontSize: 20,
  },
});

export default GameOverScreen;
