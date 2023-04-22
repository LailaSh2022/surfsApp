// screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import OrderSummary from "./screens/OrderSummary";
import ReceiverDetails from "./screens/ReceiverDetails";
import History from "./screens/History";
import AddReceiver from "./screens/AddReceiver";
import ReceiverList from "./screens/ReceiverList";
import SignUp from "./screens/SignUp";
import Unsubscribe from "./screens/Unsubscribe";
import { useEffect } from "react";
import { getAllRecipients, getAllUsers } from "./Database";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    getAllUsers();
    getAllRecipients();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "SurfsApp Limited" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddReceiver" component={AddReceiver} />
        <Stack.Screen name="ReceiverDetails" component={ReceiverDetails} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Unsubscribe" component={Unsubscribe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
