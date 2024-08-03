import { View, Text, TextInput, KeyboardType } from "react-native";
import React from "react";

interface IInputField {
  placeholder: string;
  ViewStyle?: string;
  keyBoardtype?: KeyboardType;
  ispassWordField?: boolean;
  value?: string;
  onchange: (e: string) => object | void;
}

const InputField = ({
  placeholder,
  keyBoardtype = "default",
  ispassWordField = false,
  ViewStyle,
  onchange,
  value,
}: IInputField) => {
  return (
    <View
      className={` ${ViewStyle} border-2 rounded-md px-3 border-[#eaecee] mb-3`}
    >
      <TextInput
        placeholder={placeholder}
        keyboardType={keyBoardtype}
        secureTextEntry={ispassWordField}
        onChangeText={(e) => onchange(e)}
        // value={value}
        className="text-base font-semibold"
      />
    </View>
  );
};

export default InputField;
