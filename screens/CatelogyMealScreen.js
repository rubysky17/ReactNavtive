import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/";

const CatelogyMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryID");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const itemMeal = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectedMeal={() => {}}
        {...itemData.item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default CatelogyMealScreen;

CatelogyMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
