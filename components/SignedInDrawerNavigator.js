import { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./../screens/Login";
import Profile from "./../screens/Profile";
import Home_Page01 from "./../screens/HomePage";
import History from "./../screens/History";
import ContactUs from "../screens/Contactus";
import { View, Text } from "react-native";
import ReceiverList from "../screens/ReceiverList";
import TransferMoney from "../screens/ReceiverList";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { GetReceiverDetails, GetAllOrderByUserId } from "../Database";
import "./../global";

const Drawer = createDrawerNavigator(); // Create the Drawer object
const SignedInDrawerNavigator = ({ userId }) => {
  const navigation = useNavigation();
  // Display sign out page when signed out:
  function SignOut() {
    global.userId[0] = -1;
    console.log(global.userId);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 16 }}>Thank you for using SurfsApp</Text>
      </View>
    );
  }

  // Draw the Drawer
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
    >
      {/* Navigate to Home page screen */}
      <Drawer.Screen
        component={Home_Page01}
        name={"Home Page"}
        options={{
          drawerLabel: "Home", // Display the Home icon.
          drawerIcon: ({ focused, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={focused ? "#007AFF" : "#8E8E93"}
            />
          ),
        }}
        // Use navigation to navigate to the 'Settings' screen
        listeners={{
          press: () => navigation.navigate("DrawHome_Page", { userId: userId }),
        }}
      />
      {/* Navigate to Profile screen */}
      <Drawer.Screen
        component={Profile}
        name={"Your Profile"}
        initialParams={{ userId: userId }}
      />
      {/* Navigate to Receiver List screen */}
      <Drawer.Screen
        component={ReceiverList}
        name={"Receiver's List"}
        initialParams={{ userId: userId }}
      />
      {/* Navigate to Receiver List screen */}
      <Drawer.Screen
        component={TransferMoney}
        name={"Transfer Money"}
        initialParams={{ userId: userId }}
      />
      {/* Navigate to History screen */}
      <Drawer.Screen
        component={History}
        name={"History"}
        initialParams={{ userId: userId }}
      />
      {/* Navigate to Contact Us screen */}
      <Drawer.Screen
        component={ContactUs}
        name={"Contact Us"}
        initialParams={{ userId: userId }}
      />
      {/* Navigate to Sign out Page */}
      <Drawer.Screen component={SignOut} name={"Sign Out"} />
    </Drawer.Navigator>
  );
};
export default SignedInDrawerNavigator;
