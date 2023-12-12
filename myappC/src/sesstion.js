async function storeUserSession() {
  try {
    await EncryptedStorage.setItem(
      "user_session",
      JSON.stringify({
        token: "ACCESS_TOKEN",
        username: "emeraldsanto",
        email: "p@gmail.com",
        password: "Pratima@123",
        confirmPassword: "Pratima@123",
      })
    );
  } catch (error) {
    console.log(error);
  }
}
