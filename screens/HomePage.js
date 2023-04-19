import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import Login from "./Login";
import Profile from "./Profile";
import CurrencyScreen from "../components/CurrencyScreen";
import InputWithButton from "../components/InputWithButton";
import PageFooter from "../components/PageFooter";
import SignedInDrawerNavigator from "../components/SignedInDrawerNavigator";
//styles
import {
  SubPageLogo,
  StyledContainer,
  StyledSmallButton,
  ButtonText,
  SmallButtonText,
  Colors,
  Container,
  ButtonContainer,
  StyledButton,
  Input,
  StyledSideSmallButton,
  InnerContainer,
} from "../components/Styles";
const { brand, darkLight, tertiary } = Colors;
const TEMP_BASE_CURRENCY = "NZD";
const TEMP_QUOTE_CURRENCY = "USD";
// Open the Home Page
function DrawHome_Page() {
  return (
    <StyledContainer>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginTop: "2%",
          position: "absolute",
        }}
      >
        <StyledSideSmallButton>
          <SmallButtonText>Sign In</SmallButtonText>
        </StyledSideSmallButton>
        <View style={{ width: "5%" }} />
        <StyledSideSmallButton>
          <SmallButtonText>Sign Up</SmallButtonText>
        </StyledSideSmallButton>
        <View style={{ width: "8%" }} />
      </View>
      <View
        style={{
          left: 0,
          top: 0,
          marginTop: "-6%",
          position: "absolute",
        }}
      >
        <SubPageLogo
          resizeMode="cover"
          source={require("./../assets/Logo.png")}
        />
      </View>

      <InnerContainer>
        <View style={{ height: "7%" }} />
        <CurrencyScreen />
        <View style={{ height: "0.5%" }} />
        <InputWithButton buttonText={TEMP_BASE_CURRENCY} />
        <View style={{ height: "0.5%" }} />
        <Text>%1.00 Our fee</Text>
        <View style={{ height: "2%" }} />
        <Text>%1.00 Total fee</Text>
        <View style={{ height: "2%" }} />
        <Text>$1.00 Total Amount will Convert</Text>
        <View style={{ height: "1%" }} />
        <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} disable={false} />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <StyledSmallButton>
            <SmallButtonText>Refresh</SmallButtonText>
          </StyledSmallButton>
          <View style={{ width: "10%" }} />
          <StyledSmallButton>
            <SmallButtonText>Transfer</SmallButtonText>
          </StyledSmallButton>
        </View>
      </InnerContainer>
      <View>
        <PageFooter />
      </View>
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
      <Drawer.Screen component={DrawHome_Page} name={"Home Page"} />
      <Drawer.Screen component={Contacts} name={"Contact Us"} />
      <Drawer.Screen component={Login} name={"Sign In"} />
      {/*Navigate to Login Page*/}
    </Drawer.Navigator>
  );
};

const HomePage = ({ navigation }) => {
  const route = useRoute();
  console.log("route: ", route);

  const { userId } = route.params || {};
  console.log("userId: ", userId);

  useEffect(() => {
    if (!userId) {
      console.log("Error: userId is undefined");
      navigation.navigate("Login");
    }
  }, [userId, navigation]);

  return userId ? <SignedInDrawerNavigator /> : <DrawerNavigator />;
};

export default HomePage;
