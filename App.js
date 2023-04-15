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
import OrderReceiverList from "./screens/OrderReceiverList";
import SignUp from "./screens/SignUp";

import { useEffect } from "react";
import { getAllRecipients, getAllUsers } from "./Database";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    getAllUsers();
    getAllRecipients();
  }, []);
  5;

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
        <Stack.Screen name="ReceiverDetails" component={ReceiverDetails} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
