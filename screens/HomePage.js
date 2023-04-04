import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
//styles
import {
  SubPageLogo,
  StyledContainer,
  StyledSmallButton,
  ButtonText,
  SmallButtonText,
  BorderText,
  FlagImage,
  MyTextInput,
  Colors,
} from "../components/Styles";
const { brand, darkLight, tertiary } = Colors;
// Open the Home Page
function Home_Page() {
  return (
    <StyledContainer>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginTop: 20,
          position: "absolute",
        }}
      >
        <StyledSmallButton>
          <SmallButtonText>Sign In</SmallButtonText>
        </StyledSmallButton>
        <View style={{ width: 5 }} />
        <StyledSmallButton>
          <SmallButtonText>Sign Up</SmallButtonText>
        </StyledSmallButton>
        <View style={{ width: 5 }} />
      </View>

      <SubPageLogo
        resizeMode="cover"
        source={require("./../assets/Logo.png")}
        style={{
          alignSelf: "left",
          marginTop: -10,
          position: "absolute",
        }}
      />
      <View style={{ height: 30 }} />
      <BorderText>
        <View style={{ flexDirection: "row", height: 30 }}>
          <View style={{ width: 100 }} />
          <Text>Currency</Text>
          <View style={{ width: 90 }} />
          <Text>Exchange Rate</Text>
        </View>
        <View style={{ flexDirection: "column", height: 10 }} />
        <View style={{ flexDirection: "row", height: 30 }}>
          <View style={{ width: 10 }} />
          <FlagImage source={require("./../assets/USFlag.png")} />
          <View style={{ width: 30 }} />
          <Text>USA Dollar </Text>
        </View>

        <View style={{ flexDirection: "column", height: 10 }} />
        <View style={{ flexDirection: "row", height: 30 }}>
          <View style={{ width: 10 }} />
          <FlagImage source={require("./../assets/AustraliaFlag.png")} />
          <View style={{ width: 30 }} />
          <Text>Australian Dollar</Text>
        </View>
        <View style={{ flexDirection: "column", height: 10 }} />
        <View style={{ flexDirection: "row", height: 30 }}>
          <View style={{ width: 10 }} />
          <FlagImage source={require("./../assets/UKFlag.png")} />
          <View style={{ width: 30 }} />
          <Text>Pound sterling</Text>
        </View>

        <View style={{ flexDirection: "column", height: 10 }} />
        <View style={{ flexDirection: "row", height: 30 }}>
          <View style={{ width: 10 }} />
          <FlagImage source={require("./../assets/ChinaFlag.png")} />
          <View style={{ width: 30 }} />
          <Text>Chinese Yuan</Text>
        </View>
        <View style={{ flexDirection: "column", height: 10 }} />
      </BorderText>
    </StyledContainer>
  );
}
// Open the Contact Us Page
function Contacts() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Us</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
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
      <Drawer.Screen component={Home_Page} name={"Home Page"} />
      <Drawer.Screen component={Contacts} name={"Contact Us"} />
      <Drawer.Screen component={Login} name={"Sign In"} />
      {/*Navigate to Login Page*/}
    </Drawer.Navigator>
  );
};

const HomePage = () => {
  return <DrawerNavigator />;
};

export default HomePage;
/*export function HomePage() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}*/
