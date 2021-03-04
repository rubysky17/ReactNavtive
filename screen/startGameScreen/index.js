import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

import Card from "../../components/card";
import Color from "../../const/Colors";
import NumberRender from "../../components/numberRender";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [numberConfirmed, setNumberConfirmed] = useState();

  const handleChangeNumber = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetNumberHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmNumberHandler = () => {
    !!enteredValue && setConfirmed(true);
    setNumberConfirmed(enteredValue);
    Keyboard.dismiss();
  };

  const handleNumberSubmit = () => {
    onStartGame && onStartGame(numberConfirmed);
  };

  let confirmLayout;
  if (confirmed) {
    confirmLayout = (
      <View style={styles.screenConfirm}>
        <Card style={{ height: 300 }}>
          <Text style={{ fontSize: 20 }}>Con số bạn chọn là</Text>
          <NumberRender number={numberConfirmed} />
          <View style={{ marginTop: 30 }}>
            <Button
              title="Bắt đầu"
              onPress={handleNumberSubmit}
              color={Color.startNumber}
            ></Button>
          </View>
        </Card>
      </View>
    );
  } else {
    confirmLayout = [];
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <Text style={styles.title}>Trò chơi bắt đầu</Text>

        <Card>
          <Text>Chọn một con số</Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập số"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleChangeNumber}
          />

          <View style={styles.displayButton}>
            <View style={styles.button}>
              <Button
                title="Đặt lại"
                onPress={resetNumberHandler}
                color={Color.buttonReset}
              ></Button>
            </View>

            <View style={styles.button}>
              <Button
                title="Xác nhận"
                onPress={confirmNumberHandler}
                color={Color.buttonConfirm}
              ></Button>
            </View>
          </View>
        </Card>

        {confirmLayout}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    textAlign: "center",
  },
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

  screenConfirm: {
    marginTop: 50,
    width: "100%",
  },
});
export default StartGameScreen;
