import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";
import { StatusBar as Expobar } from "expo-status-bar";
const Wrapper = ({ children }) => {
  return (
    <View
      className="bg-gray-900 flex-1 w-full px-[5vw]"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
      <Expobar style="light" backgroundColor="#111827" />
    </View>
  );
};

export default Wrapper;
