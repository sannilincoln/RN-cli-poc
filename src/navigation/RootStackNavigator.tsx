import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

import React from "react";
import SplashScreen from "../Screens/splash/SplashScreen";
import { RootStackParamList } from "../config/navigationTypes";
import SignIn from "../Screens/auth/SignIn";
import SignUp from "../Screens/auth/SignUp";

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
