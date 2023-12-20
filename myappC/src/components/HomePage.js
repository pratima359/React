import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native-paper";

function HomePage({ navigation }) {
  const routInfo = useRoute();
  const { loginUserName, loginPassword } = routInfo.params;

  setTimeout(() => {
    navigation.navigate("SignIn");
  }, 120000);

  const backToLoginScreen = () => {
    navigation.navigate("SignIn");
  };
  return (
    <>
      <Text>
        Hi {loginUserName}
        {loginUserName}!! loggedIn Successfully
      </Text>
      <Text onPress={backToLoginScreen}>LogOut</Text>
    </>
  );
}

export default HomePage;
