import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "./../components/HistoryItem";
import { StyledContainer } from "./../components/Styles";
import { GetAllOrderByUserId, GetReceiverDetails } from "../Database";

const History = () => {
  let transactions = [];
  GetAllOrderByUserId(1)
    .then((result) => {
      const orders = result;
      orders.map((order) => {
        GetReceiverDetails(order.OrderId)
          .then((result) => {
            const fullname = result.FirstName + " " + result.LastName;
            const receiverGet = (order.Amount * order.Exchange_Rate).toFixed(2);
            const history = {
              OrderNo: order.OrderId,
              SentDate: order.Send_Date,
              Receiver: fullname,
              Amount: order.Amount,
              ReceivierGets: receiverGet,
              From: order.From_Currency,
              To: order.To_Currency,
            };
            transactions.push(history);
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
          <Text style={styles.headline}> History</Text>
        </View>
        <Text style={{ paddingTop: 15, color: "blue", fontSize: 15 }}>
          Transactions
        </Text>
        {transactions.map((item, i) => (
          <HistoryItem item={item} key={i} />
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

export default History;
