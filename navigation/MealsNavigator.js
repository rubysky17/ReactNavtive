import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CatelogyMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const screenData = {
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealScreen,
  MealDetail: MealDetailScreen,
};

const MealsNavigator = createStackNavigator(screenData);

export default createAppContainer(MealsNavigator);
