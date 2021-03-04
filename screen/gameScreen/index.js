import React, { useState, useEffect, useRef } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import Card from "../../components/card";
import NumberRender from "../../components/numberRender";

const GameScreen = ({ userChoice, onIsOver, onNumberCount }) => {
  const [numberRandom, setNumberRandom] = useState(
    Math.floor(Math.random() * (1 + 99 - 1)) + 1
  );
  const [highNumber, setHighNumber] = useState(99);
  const [lowNumber, setLowNumber] = useState(1);
  const [countRandom, setCountRandom] = useState(-1);
  const [listNumber, setListNumber] = useState([]);
  const curList = useRef([]);

  useEffect(() => {
    if (+userChoice === numberRandom) {
      onIsOver(listNumber);
      onNumberCount(countRandom);
    }
  }, [userChoice, numberRandom]);

  useEffect(() => {
    generateNumber();
  }, [highNumber, lowNumber]);

  const handleListNumber = (number) => {
    curList.current.push(number);
    setListNumber(curList);
  };

  const generateNumber = () => {
    const nrdRandom =
      Math.floor(Math.random() * (1 + highNumber - lowNumber)) + lowNumber;

    setNumberRandom(nrdRandom);

    setCountRandom((state) => (state += 1));
    handleListNumber(nrdRandom);
  };

  const CreateAlert = (error) =>
    Alert.alert(
      "Sai nút rồi bạn ưi!!!",
      error,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  const handleLessNumber = () => {
    if (userChoice > numberRandom) {
      CreateAlert("Bạn phải chọn nút lớn hơn!!");
    } else {
      if (numberRandom !== highNumber) {
        setHighNumber(numberRandom);
      } else {
        generateNumber();
      }
    }
  };

  const handleBiggerNumber = () => {
    if (userChoice < numberRandom) {
      CreateAlert("Bạn phải chọn nút nhỏ hơn!!");
    } else {
      if (numberRandom !== lowNumber) {
        setLowNumber(numberRandom);
      } else {
        generateNumber();
      }
    }
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Card>
        <View>
          <Text style={{ fontSize: 20 }}>Số lượt nhấn: {countRandom}</Text>
        </View>

        <View>
          <NumberRender number={numberRandom} />
        </View>

        <View style={styles.displayButton}>
          <View style={styles.button}>
            <Button
              title="Nhỏ hơn"
              onPress={handleLessNumber}
              color={Color.buttonReset}
            ></Button>
          </View>

          <View style={styles.button}>
            <Button
              title="Lớn hơn"
              onPress={handleBiggerNumber}
              color={Color.buttonConfirm}
            ></Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  displayButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 40,
  },
  button: {
    width: 100,
  },
});

export default GameScreen;
