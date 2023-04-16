import React from "react";
import { TextLinkContent } from "./Styles.js";
import { deleteUser } from "./../Database.js";
import { useNavigation } from "@react-navigation/native";
import HomePage from "./../screens/HomePage.js";

const UnsubscribeLink = ({ userId, onDeleteUser }) => {
  const navigation = useNavigation();

  const handleUnsubscribe = () => {
    onDeleteUser(userId);
    navigation.navigate(HomePage);
  };

  return (
    <TextLinkContent onPress={handleUnsubscribe}>Unsubscribe</TextLinkContent>
  );
};

export default UnsubscribeLink;