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
import { useNavigation } from "@react-navigation/native";
import CurrencyExchange from "../components/CurrencyExchange";
import "../global.js";

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

function DrawHome_Page() {
  // const route = useRoute();
  // console.log("route: ", route);
  // const { userId } = route.params || {};
  console.log("Draw_HomePage_userId: ", global.userId[0]);
  const navigation = useNavigation();
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
        <StyledSideSmallButton onPress={() => navigation.navigate("Login")}>
          <SmallButtonText>Sign In</SmallButtonText>
        </StyledSideSmallButton>
        <View style={{ width: "5%" }} />
        <StyledSideSmallButton onPress={() => navigation.navigate("SignUp")}>
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
        <CurrencyExchange />
      </InnerContainer>

      <View>
        <PageFooter />
      </View>
    </StyledContainer>
  );
}
// Open the Contact Us Page
// function Contacts() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Contact Us</Text>
//     </View>
//   );
// }

const HomePage = () => {
  const route = useRoute();
  console.log("route: ", route);

  const { userId } = route.params || {};
  console.log("userId: ", userId);
  global.userId[0] = userId;
  console.log("HomePage global.userId[0]: ", global.userId[0]);
  useEffect(() => {
    if (!userId) {
      console.log("Info: userId is undefined");
    }
  }, [userId]);

  if (userId) {
    return <SignedInDrawerNavigator userId={userId} />;
  } else {
    return <DrawHome_Page />;
  }
};

export default HomePage;
