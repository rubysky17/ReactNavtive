import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/";
import { Ionicons } from "@expo/vector-icons";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

MealDetailScreen.navigationOptions = (data) => {
  const mealId = data.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <HeaderButton />,
  };
};

const styles = StyleSheet.create({});
