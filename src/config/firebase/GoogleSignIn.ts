import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId:
        "853861379650-jsh0qg6fjdjtbdub7a20q7l0ru68op80.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    await GoogleSignin.hasPlayServices();

    const userInfo = await GoogleSignin.signIn();
    const { idToken } = await GoogleSignin.signIn();
    const googleCred = auth.GoogleAuthProvider.credential(idToken);
    auth().signInWithCredential(googleCred);

    return userInfo;
  } catch (error) {
    console.log("=> Google Sign In", error);
  }
};
