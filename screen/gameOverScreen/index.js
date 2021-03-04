import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";

const GameOverScreen = ({ numberCount, listNumber, onStartGame }) => {
  const [arrayList, setArrayList] = useState([]);

  useEffect(() => {
    let result = [...listNumber.current];
    result.pop();
    setArrayList(result);
  }, [listNumber]);

  const Item = ({ item, index }) => {
    return (
      <View style={{ height: 50, width: 120, alignItems: "center" }}>
        <Text style={{ color: "red", fontSize: 20 }}>Lần thứ: {index + 1}</Text>
        <Text style={{ color: "red", fontSize: 20 }}>{item}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ textAlign: "center", marginVertical: 15 }}>
          Số lượt nhấn: {numberCount}
        </Text>
        <View style={{ width: 100, marginBottom: 90 }}>
          <Button
            title="Chơi lại"
            onPress={() => {
              onStartGame();
            }}
            color={Color.buttonConfirm}
          ></Button>
        </View>
      </View>
      <FlatList
        horizontal
        data={arrayList}
        keyExtractor={({ index }) => index}
        renderItem={({ item, index }) => (
          <Item item={item} key={index} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GameOverScreen;
