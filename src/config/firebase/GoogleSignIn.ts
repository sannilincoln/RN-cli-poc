import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { WEB_CLIENT_ID } from "@env";

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: WEB_CLIENT_ID,
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
