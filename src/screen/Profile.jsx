import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Wrapper from "../utils/Wrapper";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Profile = ({ route, navigation }) => {
  const { userData: user } = route.params;

  const logout = () => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
    navigation.replace("Login");
  };

  return (
    <Wrapper>
      <View className="gap-y-5 mt-1">
        <View className="bg-blue-400 py-4 rounded-md">
          <Text className="text-white text-center font-bold">Profile</Text>
        </View>
        <View className="h-[83%] bg-blue-200 rounded-md mx-2 p-2 relative">
          <View className="flex-row items-center gap-x-2">
            <Image
              source={{
                uri:
                  user.photo !== null
                    ? user?.photo
                    : "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg",
              }}
              className="w-20 aspect-square rounded-full"
            />
            <View className="gap-y-1">
              <Text className="font-semibold text-lg">{user?.name}</Text>
              <Text className="text-light ">{user?.email}</Text>
            </View>
          </View>
          <TouchableOpacity
            className="bg-blue-400 py-3 rounded-md absolute bottom-6 left-2 w-full"
            onPress={logout}
          >
            <Text className="text-center">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default Profile;
