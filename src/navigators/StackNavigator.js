import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default StackNavigator;
