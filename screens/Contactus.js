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
import { WebView } from "react-native-webview";

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
const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6385.319773766725!2d174.76224777988284!3d-36.850620800336834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fad496c8d7%3A0xae0eba09c3f363b4!2s244%20Queen%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sen!2snz!4v1682368353142!5m2!1sen!2snz";
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
            //source={require("./../assets/building.png")}
            style={{ borderRadius: 5 }} // The style added By Laila
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
