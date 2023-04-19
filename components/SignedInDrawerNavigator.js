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
const SignedInDrawerNavigator = ({ userId }) => {
  const screenProps = { userId: userId };
  console.log(screenProps);
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
      <Drawer.Screen
        component={Home_Page01}
        name={"Home Page"}
        // screenProps={screenProps}
        //initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={Profile}
        name={"Your Profile"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={History}
        name={"History"}
        initialParams={{ userId: userId }}
      />
      <Drawer.Screen
        component={Contacts}
        name={"Contact Us"}
        initialParams={{ userId: userId }}
        // screenProps={screenProps}
      />
      {/*Navigate to Login Page*/}
    </Drawer.Navigator>
  );
};
export default SignedInDrawerNavigator;
