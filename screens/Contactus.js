import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Alert,
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
    
  } from "./../components/Styles";
  
  import { useNavigation } from "@react-navigation/native";

  const { brand, darkLight, tertiary } = Colors;
  const ContactUs = () => {
    const navigation = useNavigation();
  
  
    };
    return (
      <StyledContainer>
        <StatusBar style="dark" />
        <ScrollView>
          <KeyboardAvoidingView
            behavior="position"
            style={{ backgroundColor: "white", flex: 1 }}
          >
            <InnerContainer>
              <PageLogo
                resizeMode="cover"
                source={require("./../assets/Logo.png")}
              />
              <PageTitle>Contact Us</PageTitle>
              <image>
                source={require("./../assets/building.png")}
              </image>
              <ExtraView>
                <ExtraText>Name: SurfsApp Limited </ExtraText>
                <ExtraText>Phone Number: 09 827 6100 </ExtraText>
                <ExtraText>Address: 242 Queen Street, Auckland CBD </ExtraText>
                <ExtraText>Auckland 1010 </ExtraText>
                <ExtraText>Email: surfsapp.limited@gmail.com </ExtraText>
                <ExtraText>Opening Hours: 9:00am - 5:00 pm </ExtraText>
                </ExtraView>
            </InnerContainer>
          </KeyboardAvoidingView>
        </ScrollView>
        
      </StyledContainer>
    );
  

  export default ContactUs;