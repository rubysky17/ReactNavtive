import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/";
// import HeaderButton from "../components/HeaderButton";
import { AntDesign } from "@expo/vector-icons";

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
    headerRight: () => (
      <View>
        <AntDesign name="star" size={24} color="black" />
      </View>
    ),
  };
};

const styles = StyleSheet.create({});
