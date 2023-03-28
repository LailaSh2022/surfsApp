// screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";


const Stack = createStackNavigator();

export default function App() {
<<<<<<< HEAD
  return <Profile />;
=======
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "SurfsApp Limited" }}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
     )
    ;
>>>>>>> a25c6561ab5189ad0ae96f2f9ab7607cb5281dd1
}
