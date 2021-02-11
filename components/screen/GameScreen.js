import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../card/Card";
import NumberContainer from "../number-container/NumberContainer";

const GameScreen = ({
  soNguoiDungChon,
  onIsOverHandler,
  onHandleTurnNumber,
}) => {
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

  const [soDoan, setsoDoan] = useState(generateNumber(1, 100, soNguoiDungChon));

  const soMin = useRef(1);
  const soMax = useRef(100);

  useEffect(() => {
    if (soNguoiDungChon === soDoan) {
      onIsOverHandler();
    }
  }, [soDoan, soNguoiDungChon]);

  const nextGuessHandler = (condition) => {
    if (
      (condition === "lower" && soDoan < soNguoiDungChon) ||
      (condition === "higher" && soDoan > soNguoiDungChon)
    ) {
      Alert.alert("Xin lỗi", "Bạn chọn sai rồi!", [{ text: "OK" }]);
    }

    if (condition === "lower") {
      soMax.current = soDoan;
    } else {
      soMin.current = soDoan;
    }

    const randomNumber = generateNumber(soMin.current, soMax.current, soDoan);

    setsoDoan(randomNumber);
    onHandleTurnNumber();
  };

  return (
    <View style={styles.screen}>
      <Text>Số đoán</Text>
      <NumberContainer>{soDoan}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="Thấp hơn"
          onPress={() => {
            nextGuessHandler("lower");
          }}
        />
        <Button
          title="Cao hơn"
          onPress={() => {
            nextGuessHandler("higher");
          }}
        />
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
