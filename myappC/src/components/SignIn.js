import { Link, useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Linking,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styled from "styled-components";
import WDPressable from "./WDPressable";
import { UsernameValid } from "../function";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../MockedUser";
import { loginUser } from "../redux/action/UserAction";

const SignIn = ({ navigation }) => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginUserNameErr, setLoginUserNameErr] = useState("");
  const [loginPasswordErr, setLoginPasswordErr] = useState("");
  const [loginCredentialErr, setLoginCredentialErr] = useState("");
  const userDispatch = useDispatch();
  const routInfo = useRoute();
  const userName = routInfo.params?.userName;
  const passwords = routInfo.params?.password;

  //below is written for after submitting button if we are coming back then data is cleared
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLoginUserName("");
        setLoginPassword("");
        setLoginCredentialErr("");
      };
    }, [])
  );

  const onLoginHandler = (text) => {
    setLoginUserName(text);
  };

  const onLoginPasswordHandler = (text) => {
    setLoginPassword(text);
  };

  useEffect(() => {
    userDispatch(loginUser(userData));
  }, []);

  //to use the store state, we can use useSelector()
  const userStateData = useSelector((state) => state.user);

  const userArray = userStateData.usersData.users;
  console.log("🚀 ~ file: SignIn.js:49 ~ SignIn ~ userArray:", userArray);
  const filteredData = userArray?.find((val) => {
    console.log("valssss", val);
    return val.name === loginUserName && val.password === loginPassword;
  });

  console.log("🚀 ~ file: SignIn.js:50 ~ SignIn ~ filteredData:", filteredData);
  // useEffect(() => {
  //   setLoginUserName(userName);
  // }, [userName]);

  const onPressContinue = () => {
    if (filteredData !== undefined) {
      navigation.navigate("HomePage", {
        loginUserName: loginUserName,
      });
    } else {
      setLoginCredentialErr(" Please enter correct username and password");
    }
  };

  const onPressContinueSignUP = () => {
    navigation.navigate("SignUp");
  };

  return (
    <StyleContainer>
      <Text style={{ textAlign: "center", color: "black" }}>Sign In</Text>
      <View>
        <Text>UserName</Text>
        <StyleTextInput
          placeholder="Enter UserName"
          placeholderTextColor="#fff"
          value={loginUserName}
          onChangeText={onLoginHandler}
        />
      </View>
      <View>
        <Text>Password</Text>
        <StyleTextInput
          placeholder="Enter Password"
          placeholderTextColor="#fff"
          value={loginPassword}
          onChangeText={onLoginPasswordHandler}
        />
      </View>
      {loginCredentialErr && <Text>{loginCredentialErr}</Text>}
      <Button title="Press me" onPress={onPressContinue} />

      <WDPressable onPress={onPressContinueSignUP}>
        <StyleSignUpLink>Don't have an account? Sign up</StyleSignUpLink>
      </WDPressable>
    </StyleContainer>
  );
};

export default SignIn;

const StyleContainer = styled.View`
  /* flex: 1; */
  justify-content: center;
  margin: 10px;
`;

const StyleTextInput = styled.TextInput`
  background-color: #808080;
  padding: 10px;
  margin-bottom: 10px;
`;

const StyleSignUpLink = styled(Text)`
  text-align: right;
  color: rgb(241, 148, 255);
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
`;
