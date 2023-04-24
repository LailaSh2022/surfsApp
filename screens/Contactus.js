import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons } from "@expo/vector-icons";
import PageFooter from "../components/PageFooter";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Styles
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  Colors,
  ExtraView,
  ExtraText,
  MediumPageLogo,
} from "./../components/Styles";

import { useNavigation } from "@react-navigation/native";

const { brand, darkLight, tertiary } = Colors;
const ContactUs = () => {
  const navigation = useNavigation();
  return (
    // Fixed by Change the place of retun from outside the ContactUs constant to inside the end tag "}". By Laila.
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        {/* The <View> is added By Laila To make the logo relocated at the top of the screen*/}
        <View
          style={{
            top: 0,
            marginTop: "-20%",
          }}
        >
          <PageLogo
            resizeMode="cover"
            source={require("./../assets/Logo.png")}
          />
        </View>
        <PageTitle>Contact Us</PageTitle>
        <ScrollView>
          {/* Fixed from <image> to <Image> and imported the tag from "react-native" By Laila */}
          <Image
            source={require("./../assets/building.png")}
            style={{ borderRadius: 5 }} // Added By Laila
          />
          <ExtraView>
            <View style={{ flexDirection: "column" }}>
              <ExtraText>Name: SurfsApp Limited </ExtraText>
              <ExtraText>Phone Number: 09 827 6100 </ExtraText>
              <ExtraText>Address: 242 Queen Street, Auckland CBD </ExtraText>
              <ExtraText>Auckland 1010 </ExtraText>
              <ExtraText>Email: surfsapp.limited@gmail.com </ExtraText>
              <ExtraText>Opening Hours: 9:00am - 5:00 pm </ExtraText>
            </View>
          </ExtraView>
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default ContactUs;
