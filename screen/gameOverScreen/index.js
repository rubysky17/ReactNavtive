import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import ListItem from "./ListItem";

const GameOverScreen = ({ numberCount, listNumber, onStartGame }) => {
  const Item = ({ item }) => {
    return (
      <View style={{ height: 50, width: 30 }}>
        <Text style={{ color: "red", fontSize: 20 }}>{item}</Text>
      </View>
    );
  };

  console.log("listNumber 1:", listNumber);
  return (
    <View>
      <Text>Số lượt nhấn: {numberCount}</Text>

      {/* <FlatList
        data={listNumber}
        keyExtractor={(item) => item.toString()}
        renderItem={(data) => <Item item={data} />}
        showsHorizontalScrollIndicator={false}
      /> */}

      <View>
        <Button
          title="Chơi lại"
          onPress={() => {
            onStartGame();
          }}
          color={Color.buttonConfirm}
        ></Button>
      </View>
    </View>
  );
};

export default GameOverScreen;
