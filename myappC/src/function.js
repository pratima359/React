import { allErrorMsg } from "./errorConfig";

export const EmailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const atLeastNumberRegex = /[0-9]/;

const passwordCaseSensitiveRegEx = /(?=.*[a-z])(?=.*[A-Z])/;

const atLeastSymbolRegEx = /(?=.*[-+_!@#$%^&*.:;"'<>,?{}])/;

const singleDecimalRegex = /^(\d*\.{0,1}\d{0,2}$)/;

export function UsernameValid(user) {
  console.log("🚀 ~ file: function.js:15 ~ UsernameValid ~ user:", user);
  const username = user.trim();
  if (username === "") {
    return { isValid: false, errorMsg: allErrorMsg.userName.empty };
  }
  return { isValid: true };
}

export function EmailValidation(email) {
  console.log("🚀 ~ file: function.js:23 ~ EmailValidation ~ email:", email);
  const emails = email.trim();
  if (emails === "") {
    return { isValid: false, errorMsg: allErrorMsg.email.empty };
  }
  if (!EmailRegEx.test(emails)) {
    return { isValid: false, errorMsg: allErrorMsg.email.validEmail };
  }
  return { isValid: true };
}

export const PasswordValidation = (password) => {
  console.log(
    "🚀 ~ file: function.js:35 ~ PasswordValidation ~ password:",
    password
  );
  const passwordLength = password.trim().length;
  if (passwordLength === "") {
    return {
      isValid: false,
      errorMsg: allErrorMsg.password.emptyPassword,
    };
  }
  if (passwordLength <= 8 || passwordLength >= 14) {
    return {
      isValid: false,
      errorMsg: allErrorMsg.password.passwordLengthValid,
    };
  }

  if (!atLeastNumberRegex.test(password)) {
    return {
      isValid: false,
      errorMsg: allErrorMsg.password.containsNumber,
    };
  }

  if (!passwordCaseSensitiveRegEx.test(password)) {
    return {
      isValid: false,
      errorMsg: allErrorMsg.password.caseSensitive,
    };
  }

  if (!atLeastSymbolRegEx.test(password)) {
    return {
      isValid: false,
      errorMsg: allErrorMsg.password.mustContainSymbol,
    };
  }
  return {
    isValid: true,
  };
};

export const ConfirmPasswordValidation = (password, confirmPassword) => {
  console.log(
    "🚀 ~ file: function.js:80 ~ ConfirmPasswordValidation ~ confirmPassword:",
    confirmPassword
  );
  const confirmPasswordLength = confirmPassword.trim().length;
  const passwordLength = password.trim().length;

  if (confirmPassword !== password) {
    return {
      isValid: false,
      errorMsg: "Your password number must match.",
    };
  }

  return {
    isValid: true,
  };
};
