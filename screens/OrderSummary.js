import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  StyledContainer,
  StyledBackButton,
  ButtonText,
  StyledButton,
} from "./../components/Styles";
import "../global";
import { getLastOrderId, InsertOrder } from "../Database";
import { useRoute, useNavigation } from "@react-navigation/native";

const OrderSummary = ({ route }) => {
  const navigation = useNavigation();
  const [orderNumber, setOrderNumber] = useState(0);

  // Updated by Laila Shihada to get the data from the global.js file
  console.log(global.ReceiverId[0]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0, so add 1 to get the actual month number
  const currentDay = currentDate.getDate();
  const date = currentMonth + "/" + currentDay + "/" + currentYear;

  getLastOrderId()
    .then((lastOrderId) => {
      setOrderNumber(lastOrderId + 1);
    })
    .catch((error) => {
      console.error(`Error retrieving last order id: ${error}`);
    });
  console.log(global.userId[0]);
  const continueHandler = () => {
    InsertOrder({
      SenderId: global.userId[0],
      RecipientId: global.ReceiverId[0],
      Amount: global.FromAmount[0],
      Fee: global.fee[0],
      Rate: global.rate[0],
      FromCurrency: global.FromCurrency[0],
      ToCurrency: global.ToCurrency[0],
      Date: date,
    })
      .then(() => console.log("success"))
      .catch((error) => console.log("error"));
    navigation.navigate("History", { userId: global.userId[0] });
  };

  return (
    <StyledContainer>
      <View style={{ flexDirection: "row" }}>
        <StyledBackButton>
          <ButtonText>{"<"}</ButtonText>
        </StyledBackButton>
        <Text style={styles.headline}> Order Summary</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ width: "25%" }}>Order No:</Text>
        <Text>{orderNumber}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Date:</Text>
        <Text>
          {currentMonth}
          {"/"}
          {currentDay}
          {"/"}
          {currentYear}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Rate:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          1.00{global.FromCurrency[0]} = {global.rate[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Transfer Info:</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Amount:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.FromAmount[0]}
          {global.FromCurrency[0]}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Fee (1%):</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.fee[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Total:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.Amount[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "40%" }}>Total Receiver gets:</Text>
        <Text style={{ paddingBottom: 30, fontSize: 20, marginTop: -5 }}>
          {global.Amount[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <StyledButton onPress={() => continueHandler()}>
        <ButtonText>Continue</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  headline: {
    flex: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
    color: "#152A5F",
  },

  line: {
    paddingTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default OrderSummary;
