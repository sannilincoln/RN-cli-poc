import { View, Text, ImageBackground, StatusBar } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { SplashScreenProps } from "../../config/navigationTypes";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  setTimeout(() => {
    navigation.replace("SignIn");
  }, 2000);

  return (
    <ImageBackground
      source={require("../../../assets/elanding.jpg")}
      className="flex-1 bg-[#96b8e6]"
      resizeMode="contain"
    >
      <StatusBar backgroundColor={"#96b8e6"} />
    </ImageBackground>
  );
};

export default SplashScreen;
