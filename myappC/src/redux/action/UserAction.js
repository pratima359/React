export const loginUser = (data) => ({
  type: "LOGIN",
  payload: data,
});

export const logoutUser = (data) => ({
  type: "LOGOUT",
  payload: data,
});

export const setAuthData = (data) => ({
  type: "IS_AUTH",
  payload: data,
});
