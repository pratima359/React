import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import styled from "styled-components";
import {
  ConfirmPasswordValidation,
  EmailValidation,
  PasswordValidation,
  UsernameValid,
} from "../function";
import { useFocusEffect } from "@react-navigation/native";

function SignUp({ navigation }) {
  const [userName, setUserName] = useState({
    val: "",
    error: "",
  });
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValidationErr, setEmailValidationErr] = useState("");
  const [passwordValidationErr, setPasswordValidationErr] = useState("");
  const [confirmPasswordValidationErr, setConfirmPasswordValidationErr] =
    useState("");

  //below is written for after submitting button if we are coming back then data is cleared
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setUserEmail("");
        setUserName("");
        setEmailValidationErr("");
      };
    }, [])
  );

  const handleChangeUserName = (text) => {
    setUserName({
      ...userName,
      val: text,
    });
    console.log("🚀 ~ file: SignUp.js:9 ~ SignUp ~ e:", text);
  };

  const handleChangeEmail = (text) => {
    setUserEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleChangeConfirmPassword = (text) => {
    setConfirmPassword(text);
  };

  const onPressContinue = () => {
    const userNameValidation = UsernameValid(userName.val);

    if (!userNameValidation.isValid) {
      return setUserName({ ...userName, error: userNameValidation.errorMsg });
    } else {
      setUserName({ ...userName, error: "" });
    }

    const emailValidation = EmailValidation(userEmail);

    if (!emailValidation.isValid) {
      return setEmailValidationErr(emailValidation.errorMsg);
    } else setEmailValidationErr("");

    const passwordValidation = PasswordValidation(password);

    if (!passwordValidation.isValid) {
      return setPasswordValidationErr(passwordValidation.errorMsg);
    } else {
      setPasswordValidationErr("");
    }

    const confirmPasswordValidation = ConfirmPasswordValidation(
      password,
      confirmPassword
    );

    if (!confirmPasswordValidation.isValid) {
      return setConfirmPasswordValidationErr(
        confirmPasswordValidation.errorMsg
      );
    } else {
      setConfirmPasswordValidationErr("");
    }

    return navigation.navigate("SignIn", {
      userName: userName.val,
      userEmail: userEmail,
      password: password,
    });
  };

  return (
    // <SafeAreaView>
    <MainContainer>
      <Text>UserName</Text>
      <StyledInputEditableContainer>
        <StyledTextInput
          value={userName.val}
          onChangeText={handleChangeUserName}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={true}
          placeholder="Enter your UserName"
        />
      </StyledInputEditableContainer>
      {userName.error && <StyleErrorText>{userName.error}</StyleErrorText>}
      <Text>Email</Text>
      <StyledInputEditableContainer>
        <StyledTextInput
          value={userEmail}
          onChangeText={handleChangeEmail}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={true}
          placeholder="Enter your UserEmail"
        />
      </StyledInputEditableContainer>
      {emailValidationErr && (
        <StyleErrorText>{emailValidationErr}</StyleErrorText>
      )}
      <Text>Password</Text>
      <StyledInputEditableContainer>
        <StyledTextInput
          value={password}
          onChangeText={handleChangePassword}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={true}
          placeholder="Enter your Password"
        />
      </StyledInputEditableContainer>
      {passwordValidationErr && (
        <StyleErrorText>{passwordValidationErr}</StyleErrorText>
      )}
      <Text>Confirm Password</Text>
      <StyledInputEditableContainer>
        <StyledTextInput
          value={confirmPassword}
          onChangeText={handleChangeConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          blurOnSubmit={true}
          placeholder="Enter your ConfirmPassword"
        />
      </StyledInputEditableContainer>
      {confirmPasswordValidationErr && (
        <StyleErrorText>{confirmPasswordValidationErr}</StyleErrorText>
      )}
      <Button title="Press me" onPress={onPressContinue} />
    </MainContainer>
    // </SafeAreaView>
  );
}

export default SignUp;

const MainContainer = styled.View`
  flex: 1;
  padding: 20px 24px;
`;
const StyledTextInput = styled.TextInput`
  width: 100%;
  padding: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const StyledInputEditableContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-radius: 8px;
  background-color: #ffffff;
`;
const StyleErrorText = styled.Text`
  color: red;
`;
// const StyledWDPressAble = styled.button`
//   background: #fff;
//   border-radius: 4px;
//   color: #000;
// `;
// const StyledButtonText = styled.text`
//   text-align: center;
//   background-color: #1f5eb7;
//   color: #ffffff;
//   padding: 8px 16px;
// `;
