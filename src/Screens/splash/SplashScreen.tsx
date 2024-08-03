import { View, Text, ImageBackground, StatusBar } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { SplashScreenProps } from "../../config/types/navigationTypes";
import { _getfromAsyncStorage } from "../../config/storage";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  setTimeout(() => {
    // navigation.replace("SignIn");
    checkUser();
  }, 2000);

  const checkUser = async () => {
    const value = await _getfromAsyncStorage("user");
    if (value) {
      navigation.navigate("HomeScreen");
    } else {
      navigation.navigate("SignIn");
    }
  };

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
