// screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import OrderSummary from "./screens/OrderSummary";
import ReceiverDetails from "./screens/ReceiverDetails";
import History from "./screens/History";


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
                <Stack.Screen name="ReceiverDetails" component={ReceiverDetails} />
                <Stack.Screen name="OrderSummary" component={OrderSummary} />
                <Stack.Screen name="History" component={History} />
          </Stack.Navigator>
        </NavigationContainer>
     );
}
