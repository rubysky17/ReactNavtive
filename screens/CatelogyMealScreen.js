import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/";

const CatelogyMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryID");
  const categoryTitle = navigation.getParam("categoryTitle");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meal Detail!"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetail" });
        }}
      />
    </View>
  );
};

export default CatelogyMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
