import AsyncStorge from "@react-native-async-storage/async-storage";
import { IGoogleUSerData, User } from "./types/googleData";
interface IStorage {
  key: string;
  value: User;
}

export const _storeIntoAsyncStorage = async (key: string, value: User) => {
  const jsonValue = JSON.stringify(value);

  try {
    await AsyncStorge.setItem(key, jsonValue);
  } catch (e) {
    console.log("=> error saving data in async storage", e);
  }
};
export const _getfromAsyncStorage = async (key: string) => {
  try {
    const item = await AsyncStorge.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return null;
    }
  } catch (e) {
    console.log("=> error getting data in async storage", e);
  }
};
