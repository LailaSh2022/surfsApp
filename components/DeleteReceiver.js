import React from "react";
import { TextLinkContent } from "./Styles.js";
import { deleteUser } from "./../Database.js";
import { useNavigation } from "@react-navigation/native";
//import HomePage from "./../screens/HomePage.js";
import Unsubscribe from "../screens/Unsubscribe.js";
import { Alert } from "react-native";
import ReceiverList from "../screens/ReceiverList.js";

const DeleteReceiver = ({ userId, onDeleteUser }) => {
  const navigation = useNavigation();

  const handleDeleteReceiver = () => {
    Alert.alert(
      `Delete ${Recipients.name}`,
      "Are you sure you want to delete this receiver?",
      "",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            onDeleteRecipient(recipientId);
            navigation.navigate(DeleteReceiver);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TextLinkContent onPress={handleDeleteReceiver}>Delete </TextLinkContent>
  );
};

export default DeleteReceiver;


