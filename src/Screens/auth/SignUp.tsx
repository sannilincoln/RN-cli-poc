import { View, Text, StatusBar } from "react-native";
import React from "react";
import InputField from "../../componenets/InputField";
import CustomButton from "../../componenets/CustomButton";

const SignUp = () => {
  return (
    <View className="bg-white flex-1 p-4">
      <StatusBar backgroundColor={"#fff"} />

      <Text className="text-3xl mt-5 text-black  font-bold">SignUp Here</Text>

      <View className="flex-1 justify-center ">
        <InputField placeholder="Email" keyBoardtype={"email-address"} />
        <InputField placeholder="Password" ispassWordField={true} />
        <CustomButton
          onpress={() => console.log()}
          buttonTextStyle="text-white font-bold text-base"
          style="p-3 rounded-full mr-5  mt-5 w-full bg-[#034ef7] "
          title="Login"
        />
      </View>
    </View>
  );
};

export default SignUp;
