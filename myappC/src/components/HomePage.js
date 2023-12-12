import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native-paper";

function HomePage({ navigation }) {
  const routInfo = useRoute();
  const { userName, userEmail, password } = routInfo.params;

  setTimeout(() => {
    navigation.navigate("SignUp");
  }, 120000);

  const backToLoginScreen = () => {
    navigation.navigate("SignUp");
  };
  return (
    <>
      <Text>
        Hi {userEmail}
        {userEmail}!! loggedIn Successfully
      </Text>
      <Text onPress={backToLoginScreen}>LogOut</Text>
    </>
  );
}

export default HomePage;
