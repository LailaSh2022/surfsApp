import React from "react";
import { TextLinkContent } from "./Styles.js";
import { TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Login from "./../screens/Login.js";

const SignInLink = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Login);
  };
  return <TextLinkContent onPress={handlePress}>Sign In</TextLinkContent>;

  //return <TextLinkContent onPress={handlePress}>Sign In</TextLinkContent>;
};

export default SignInLink;