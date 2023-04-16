import React from "react";
import { TextLinkContent } from "./Styles.js";
import { deleteUser } from "./../Database.js";
import { useNavigation } from "@react-navigation/native";
import SignUp from "./../screens/SignUp.js";

const SignUpLink = () => {
  const navigation = useNavigation();

  const handleUnsubscribe = () => {
    navigation.navigate(SignUp);
  };

  return <TextLinkContent onPress={handleUnsubscribe}>Sign Up</TextLinkContent>;
};

export default SignUpLink;
