import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HistoryItem from "../components/HistoryItem";
import {
  PageTitle,
  StyledContainer,
  StyledFormArea,
  StyledSideSmallButton,
  SmallButtonText,
  StyledButton,
  ButtonText,
  StyledBackButton,
} from "../components/Styles";
import {
  AddNewReceiver,
  GetAllOrderByUserId,
  GetReceiverDetails,
  GetRecipientList,
} from "../Database";
import { useRoute, useNavigation } from "@react-navigation/native";
import ReceiverListItem from "../components/ReceiverListItem";
import DeleteReceiver from "../components/DeleteReceiver";
import ReceiverDetails from "./ReceiverDetails";
import "./../global.js";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const RecipientItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity onPress={toggleChecked}>
        {isChecked ? (
          <FontAwesome name="check-square-o" size={20} />
        ) : (
          <FontAwesome name="square-o" size={20} />
        )}
      </TouchableOpacity>
      <View style={{ width: "5%" }} />
      <View style={{ flex: 1 }}>
        <Text>{item.Name}</Text>
        <Text style={{ fontSize: 15 }}>
          {item.Currency + "  "}
          {item.Bank_Account_Number}
        </Text>
      </View>

      <View style={{ flexDirection: "row", width: "27%" }}>
        <TouchableOpacity
          style={{ backgroundColor: "#e6d8f5", padding: 5, borderRadius: 5 }}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <View style={{ width: "5%" }} />
        <TouchableOpacity
          style={{ backgroundColor: "#e6d8f5", padding: 5, borderRadius: 5 }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ReceiverList = () => {
  const navigation = useNavigation();
  ////// Get user Id. Added by Laila.
  const route = useRoute();
  const { userId } = route.params;
  console.log("ReceiverList_userId: ", userId);
  ////// Get user Id. Added by Tati.
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  // const [recipientList, setRecipientList] = useState([]);

  useEffect(() => {
    if (!userId) {
      console.log("Info: userId is undefined");
    }
  }, [userId]);
  //////
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    GetRecipientList(userId).then((results) => {
      setRecipients(results);
      console.log(results);
    });
  }, [userId]);

  return (
    <StyledContainer>
      <StyledFormArea>
        <View>
          <View style={{ flexDirection: "row" }}>
            {/* <StyledBackButton>
              <ButtonText>{"<"}</ButtonText>
            </StyledBackButton> */}
            <View style={{ width: "5%" }} />
            <PageTitle> Recipients </PageTitle>
            <View style={{ width: "20%" }} />
            <StyledSideSmallButton
              onPress={() => navigation.navigate("AddReceiver")}
            >
              <SmallButtonText> + </SmallButtonText>
            </StyledSideSmallButton>
          </View>
          <View style={{ height: "5%" }} />
          <Text style={{ color: "blue", fontSize: 20 }}>Your Recipients:</Text>
          <View style={{ height: "10%" }} />
          <ScrollView style={{ height: "50%" }}>
            <FlatList
              data={recipients}
              renderItem={({ item }) => <RecipientItem item={item} />}
              keyExtractor={(item) => item.Id.toString()}
            />
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}></View>
        <StyledButton onPress={() => navigation.navigate("ReceiverDetails")}>
          <ButtonText>Confirm</ButtonText>
        </StyledButton>
      </StyledFormArea>
    </StyledContainer>
  );
};

export default ReceiverList;
