import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/SignUp";
import HomePage from "../components/HomePage";
import Splash from "../components/Splash";
import SignIn from "../components/SignIn";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
