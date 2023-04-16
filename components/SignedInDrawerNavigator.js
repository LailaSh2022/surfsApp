import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./../screens/Login";
import Profile from "./../screens/Profile";
import Home_Page01 from "./../screens/HomePage";
import History from "./../screens/History";

function Contacts() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Us</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const SignedInDrawerNavigator = () => {
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
      <Drawer.Screen component={Profile} name={"Your Profile"} />
      <Drawer.Screen component={History} name={"History"} />
      <Drawer.Screen component={Contacts} name={"Contact Us"} />
      {/*Navigate to Login Page*/}
    </Drawer.Navigator>
  );
};
export default SignedInDrawerNavigator;
