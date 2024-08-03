import { View, Text, StatusBar, Image, Alert } from "react-native";
import React, { useState } from "react";
import InputField from "../../componenets/InputField";
import CustomButton from "../../componenets/CustomButton";
import auth from "@react-native-firebase/auth";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(user.email) === false) {
      Alert.alert("Error", "Please provide a valid email", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ]);
      return;
    }
    if (!user.password) {
      Alert.alert("Error", "please provide a password", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ]);
      return;
    }

    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => console.log(data))
      .catch((e) => {
        Alert.alert("Error", e.message, [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "OK" },
        ]);
      });
  };

  return (
    <View className="bg-white flex-1 p-4">
      <StatusBar backgroundColor={"#eaeaea"} />

      <Text className="text-3xl mt-5 text-black  font-bold">SignUp Here</Text>
      <View className="flex-[0.5]">
        <Image
          source={require("../../../assets/ecomsign.jpeg")}
          resizeMode="contain"
          className="h-full w-full"
        />
      </View>
      <View className="flex-[0.5]">
        <View className="flex-1 justify-center ">
          <InputField
            placeholder="Email"
            keyBoardtype={"email-address"}
            ViewStyle="bg-[#eaeaea]"
            onchange={(x) => setUser({ ...user, email: x })}
          />
          <InputField
            placeholder="Password"
            ispassWordField={true}
            ViewStyle="bg-[#eaeaea]"
            onchange={(x) => setUser({ ...user, password: x })}
          />
          <CustomButton
            onPress={() => handleSignUp()}
            buttonTextStyle="text-white font-bold text-base"
            style="p-3 rounded-full mr-5  mt-5 w-full bg-[#034ef7] "
            title="SignUp "
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
