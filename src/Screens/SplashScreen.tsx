import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";

const SplashScreen = ({}) => {
  return (
    <View className="flex-1 justify-center">
      <Text className="text-center text-4xl ">SplashScreen</Text>
      <View>
        <Button title="Outline" type="solid" />
      </View>

      {/* <Button/> */}
    </View>
  );
};

export default SplashScreen;
