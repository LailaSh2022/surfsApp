import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./../screens/Login";
import Profile from "./../screens/Profile";
import Home_Page01 from "./../screens/HomePage";
import SignOut_HomePage from "./../screens/HomePage";
import History from "./../screens/History";
import ContactUs from "../screens/Contactus";
import { View, Text } from "react-native";
import ReceiverList from "../screens/ReceiverList";
import TransferMoney from "../screens/ReceiverList";

const Drawer = createDrawerNavigator();
const SignedInDrawerNavigator = ({ userId }) => {
  //const screenProps = { userId: userId };
  //console.log(screenProps);

  // Open the Sign Out Page
  function SignOut() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 16 }}>Thank you for using SurfsApp</Text>
      </View>
    );
  }
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
      <Drawer.Screen component={Home_Page01} name={"Home Page"} />
      <Drawer.Screen
        component={Profile}
        name={"Your Profile"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={ReceiverList}
        name={"Receiver's List"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={TransferMoney}
        name={"Transfer Money"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={History}
        name={"History"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={ContactUs}
        name={"Contact Us"}
        initialParams={{ userId: userId }}
      />
      {/*Navigate to Login Page*/}
      <Drawer.Screen component={SignOut} name={"Sign Out"} />
    </Drawer.Navigator>
  );
};
export default SignedInDrawerNavigator;
