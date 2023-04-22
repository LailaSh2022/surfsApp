import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "../components/HistoryItem";
import { StyledContainer } from "../components/Styles";
import { GetAllOrderByUserId, GetReceiverDetails } from "../Database";

const OrderReceiverList = () => {
  let transactions = [];
  GetReceiverDetails(1)
    .then((result) => {
      const orders = result;
      orders.map((order) => {
        GetReceiverDetails(order.OrderId)
          .then((result) => {
            const fullname = result.FirstName + " " + result.LastName;
            const receiverGet = (order.Amount * order.Exchange_Rate).toFixed(2);
            const Recipients = {
              BankAccount: Recipients.BankAccount,
              Currency: Recipients.Currency
            };
            transactions.push(Recipients);
          })
          .catch((error) => {
            console.log(`Error while getting bank_info: ${error}`);
            return;
          });
      });
    })
    .catch((error) => {
      console.log(`Error while getting order details: ${error}`);
      return;
    });

  return (
    <StyledContainer>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headline}> Receiver List</Text>
        </View>
        <Text style={{ paddingTop: 15, color: "blue", fontSize: 15 }}>
          Receiver List
        </Text>
        {transactions.map((item, i) => (
          <ReceiverList item={item} key={i} />
        ))}
      </View>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  headline: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
    color: "#152A5F",
  },
});

export default OrderReceiverList;