import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/SignUp";
import HomePage from "../components/HomePage";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
