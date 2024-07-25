import { View, Text, StatusBar } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <View className="bg-white flex-1 p-4">
      <StatusBar backgroundColor={"#fff"} />

      <Text className="text-3xl mt-5 text-black  font-bold">SignUp Here</Text>
    </View>
  );
};

export default SignUp;
