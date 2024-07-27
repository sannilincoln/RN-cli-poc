import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import FullRoundButton from "../../componenets/FullRoundButton";
import CustomButton from "../../componenets/CustomButton";
import { SignInScreenProps } from "../../config/navigationTypes";
import { _signInWithGoogle } from "../../config/firebase/GoogleSignIn";

const SignIn = ({ navigation }: SignInScreenProps) => {
  const googleSignin = async () => {
    _signInWithGoogle().then((data) => {
      if (!data) {
        console.log("no data");
        return;
      }
      console.log("=> success", data);
    });
  };

  return (
    <View className="flex-1 bg-white ">
      <StatusBar backgroundColor={"#fff"} />
      <View className="flex-[0.5]">
        <Image
          source={require("../../../assets/ecomsign.jpeg")}
          resizeMode="contain"
          className="h-full w-full"
        />
      </View>
      <View className="flex-[0.5] items-center gap-3">
        <Text className="text-3xl text-black  font-bold">Hello</Text>
        <Text className="text-base font-medium text text-center ">
          Welcome to Sale TOP A Platform To Manage Real Estate Needs
        </Text>

        <View className="flex flex-row  items-center mb-10">
          <CustomButton
            onPress={() => console.log()}
            buttonTextStyle="text-white font-bold text-base"
            style="p-3 rounded-full mr-5  mt-4 w-[150px] bg-[#034ef7] "
            title="Login"
          />
          <CustomButton
            onPress={() => navigation.navigate("SignUp")}
            buttonTextStyle="text-black font-bold text-base"
            style="p-[10px] rounded-full mt-4 w-[150px] bg-white border-2"
            title="Sign Up"
          />
        </View>

        <View className="flex-1  items-center pb-5 justify-end ">
          <Text className="text-base font-medium  text-center mb-3">
            Or via social media account
          </Text>
          <View className="flex flex-row ">
            <FullRoundButton
              onPress={() => googleSignin()}
              imgstyle="h-[30px] w-[30px]"
              imgurl={require("../../../assets/googleLogo.png")}
              style="bg-[#eee] mr-5 h-[60px] w-[60px] "
            />
            <FullRoundButton
              onPress={() => console.log()}
              imgstyle="h-[30px] w-[30px]"
              imgurl={require("../../../assets/fb.png")}
              style="bg-[#1877f2] h-[60px] w-[60px] "
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
