import { View, Text, TextInput, KeyboardType } from "react-native";
import React from "react";

interface IInputField {
  placeholder: string;
  keyBoardtype?: KeyboardType;
  ispassWordField?: boolean;
}

const InputField = ({
  placeholder,
  keyBoardtype = "default",
  ispassWordField = false,
}: IInputField) => {
  return (
    <View className="border-b border-[#eaecee] mb-3">
      <TextInput
        placeholder={placeholder}
        keyboardType={keyBoardtype}
        secureTextEntry={ispassWordField}
        className="text-base font-semibold"
      />
    </View>
  );
};

export default InputField;
