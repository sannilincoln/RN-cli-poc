import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButton {
  style: string;
  buttonTextStyle: string;
  title: string;
  onpress: () => void;
}

const CustomButton = ({ style, title, buttonTextStyle, onpress }: IButton) => {
  return (
    <TouchableOpacity onPress={() => onpress()}>
      <View className={`${style}`}>
        <Text className={`${buttonTextStyle} text-center`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
