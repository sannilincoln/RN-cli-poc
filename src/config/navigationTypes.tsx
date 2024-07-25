import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Splash"
>;
export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;
export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUp"
>;
