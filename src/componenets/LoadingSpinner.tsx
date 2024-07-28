import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Spinner from "react-native-loading-spinner-overlay";

interface ILoadingSpinner {
  isVisible: boolean;
}
const LoadingSpinner = ({ isVisible }: ILoadingSpinner) => {
  return <Spinner visible={isVisible} textContent={"Loading..."} />;
};

export default LoadingSpinner;
