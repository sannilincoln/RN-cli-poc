import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface IButton {
  style?: string;
  imgstyle?: string;
  imgurl: any;
  onPress: () => any;
}

const FullRoundButton = ({ style, imgstyle, imgurl, onPress }: IButton) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        className={`${style} flex justify-center items-center rounded-full`}
      >
        <Image source={imgurl} className={`${imgstyle}`} resizeMode="cover" />
      </View>
    </TouchableOpacity>
  );
};

export default FullRoundButton;
