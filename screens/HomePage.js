import React from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Login";
import CurrencyScreen from "../components/CurrencyScreen";
import InputWithButton from "../components/InputWithButton";
import Footer from "../components/PageFooter";
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
} from "../components/Styles";
const { brand, darkLight, tertiary } = Colors;
const TEMP_BASE_CURRENCY = "NZD";
const TEMP_QUOTE_CURRENCY = "USD";
// Open the Home Page
function Home_Page() {
  return (
    <StyledContainer>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          marginTop: "7%",
          position: "absolute",
        }}
      >
        <StyledSmallButton>
          <SmallButtonText>Sign In</SmallButtonText>
        </StyledSmallButton>
        <View style={{ width: "5%" }} />
        <StyledSmallButton>
          <SmallButtonText>Sign Up</SmallButtonText>
        </StyledSmallButton>
        <View style={{ width: "8%" }} />
      </View>

      <SubPageLogo
        resizeMode="cover"
        source={require("./../assets/Logo.png")}
        style={{
          left: 0,
          top: 0,
          marginTop: "-2%",
          position: "absolute",
        }}
      />
      <View style={{ height: "5%" }} />
      <ScrollView>
        <CurrencyScreen />
        <View style={{ height: "5%" }} />
        <View style={{ alignItems: "center" }}>
          <InputWithButton buttonText={TEMP_BASE_CURRENCY} />
          <View style={{ height: "5%" }} />
          <Text>%1.00 Our fee</Text>
          <View style={{ height: "2%" }} />
          <Text>%1.00 Total fee</Text>
          <View style={{ height: "2%" }} />
          <Text>$1.00 Total Amount will Convert</Text>
          <View style={{ height: "2%" }} />
          <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} disable={false} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ width: "20%", height: "10%" }} />
          <StyledSmallButton>
            <SmallButtonText>Refresh</SmallButtonText>
          </StyledSmallButton>
          <View style={{ width: "10%" }} />
          <StyledSmallButton>
            <SmallButtonText>Transfer</SmallButtonText>
          </StyledSmallButton>
          <View style={{ width: "30%" }} />
        </View>
      </ScrollView>
      <Footer />
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
