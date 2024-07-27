import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButton {
  style: string;
  buttonTextStyle: string;
  title: string;
  onPress: () => void;
}

const CustomButton = ({ style, title, buttonTextStyle, onPress }: IButton) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View className={`${style}`}>
        <Text className={`${buttonTextStyle} text-center`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
