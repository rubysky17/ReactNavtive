import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CatelogyMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const screenData = {
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: "Meal Categories",
    },
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: MealDetailScreen,
};

const MealsNavigator = createStackNavigator(screenData, {
  defaultNavigationOptions: {
    headerTintColor: Platform.OS === "android" ? "white" : "#e74c3c",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? "#e74c3c" : "white",
    },
  },
});

export default createAppContainer(MealsNavigator);
