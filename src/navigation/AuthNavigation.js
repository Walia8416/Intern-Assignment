
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/home";




const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator

      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode:false,
      }}

    >
      <Stack.Screen name="RishtPusht" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
