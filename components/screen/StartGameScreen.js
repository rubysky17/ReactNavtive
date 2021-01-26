import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../card/Card";
import Colors from "../../constants/colors";
import NumberContainer from "../number-container/NumberContainer";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  let confirmText;

  if (confirmed) {
    if (selectedNumber) {
      confirmText = (
        <Card style={styles.summaryContainer}>
          <Text>Số bạn chọn là</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button title="Bắt đầu" onPress={() => onStartGame(selectedNumber)} />
        </Card>
      );
    }
  }

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetNumberHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmNumberHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Số không hợp lệ", "Số phải từ 1 đến 99", [
        { text: "OK", style: "destructive", onPress: resetNumberHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Trò chơi bắt đầu</Text>

        <Card style={styles.inputContainer}>
          <Text>Chọn một con số</Text>
          <TextInput
            placeholder="Nhập số"
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Đặt lại"
                onPress={resetNumberHandler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Xác nhận"
                onPress={confirmNumberHandler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>

        {confirmText}
      </View>
    </TouchableWithoutFeedback>
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

  input: {
    borderBottomWidth: 1,
    marginVertical: 20,
  },

  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
