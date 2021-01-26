import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../card/Card";
import NumberContainer from "../number-container/NumberContainer";

const generateNumber = (min, max, soChon) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  //   Create random number
  const rndNumber = Math.floor(Math.random() * (max - min) + min);

  if (rndNumber === soChon) {
    return generateNumber(min, max, soChon);
  } else {
    return rndNumber;
  }
};

const GameScreen = ({ soNguoiDungChon }) => {
  const [soDoan, setsoDoan] = useState(generateNumber(1, 100, soNguoiDungChon));
  return (
    <View style={styles.screen}>
      <Text>Số đoán</Text>
      <NumberContainer>{soDoan}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Thấp hơn" onPress={() => {}} />
        <Button title="Cao hơn" onPress={() => {}} />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
    maxWidth: 800,
  },
});

export default GameScreen;
