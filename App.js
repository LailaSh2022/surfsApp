// screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ReceiverDetails from "./screens/ReceiverDetails";


//import Profile from "./screens/Profile";


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "SurfsApp Limited" }}
            />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ReceiverDetails" component={ReceiverDetails}/>
          </Stack.Navigator>
        </NavigationContainer>
     );
}
