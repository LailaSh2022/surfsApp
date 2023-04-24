import React from "react";
import { TextLinkContent } from "./Styles.js";
import { deleteUser } from "./../Database.js";
import { useNavigation } from "@react-navigation/native";
import Unsubscribe from "../screens/Unsubscribe.js";
import { Alert } from "react-native";

const UnsubscribeLink = ({ userId, onDeleteUser }) => {
  const navigation = useNavigation();
  const handleUnsubscribe = () => {
    Alert.alert(
      "Are you sure you want to unsubscribe?",
      "",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            onDeleteUser(userId); // Send the unsubscribed user id.
            navigation.navigate(Unsubscribe); // Navigate to Unsubscribe.js screen
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <TextLinkContent onPress={handleUnsubscribe}>Unsubscribe</TextLinkContent>
  );
};
export default UnsubscribeLink;
