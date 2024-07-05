import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Wrapper from "../utils/Wrapper";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Login = ({ navigation }) => {
  const [error, setError] = useState(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      navigation.replace("Profile", { userData: userInfo.user });
    } catch (e) {
      setError(e);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 w-full relative">
        <View className="absolute left-[20%] top-[45%]">
          <Image
            source={require("../../assets/logo.jpg")}
            className="w-40 h-10 "
          />
        </View>
        <View className=" gap-y-1 absolute bottom-10 left-0 w-full">
          <TouchableOpacity
            className="bg-blue-400  py-3 flex-row justify-around mx-3 items-center  rounded-md"
            onPress={signIn}
          >
            <Text className="text-center text-white text-sm text-light uppercase">
              Login with google
            </Text>
          </TouchableOpacity>
          <Text className="text-white underline text-center">Terms of use</Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default Login;
