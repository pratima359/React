import React from "react";
import { Text, View } from "react-native";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("SignIn");
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFF00",
      }}
    >
      <Text style={{ color: "#fff" }}>Splash Text</Text>
    </View>
  );
};

export default Splash;
