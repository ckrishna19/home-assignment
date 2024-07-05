import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import Wrapper from "./src/utils/Wrapper";

const Login = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    setUser(null);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <Wrapper>
      <View>
        {error && <Text>{JSON.stringify(error)}</Text>}
        {user && (
          <View>
            <Text>{JSON.stringify(user.user)}</Text>
            <TouchableOpacity
              onPress={logout}
              style={{
                backgroundColor: "red",
                padding: 10,
                marginVertical: 20,
                borderRadius: 20,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <GoogleSigninButton
          onPress={signIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
        />
      </View>
    </Wrapper>
  );
};

export default Login;
