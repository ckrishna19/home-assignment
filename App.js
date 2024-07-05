import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Login from "./Login";
import { useEffect } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigators/StackNavigator";
export default function App() {
  const googleConfiguration = () => {
    GoogleSignin.configure({
      webClientId: "",
      androidClientId: "",
    });
  };

  useEffect(() => {
    googleConfiguration();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
