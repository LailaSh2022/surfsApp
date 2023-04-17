import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "./../components/HistoryItem";
import { StyledContainer } from "./../components/Styles";
import { GetAllOrderByUserId, GetReceiverDetails } from "../Database";

var transactions = [];
const History = () => {
  /*
  let transactions = [
    {
      OrderNo: "2458",
      SentDate: "Jan 18 2023",
      Receiver: "Tatiane Rodrigues",
      Amount: "1500NZD",
      ReceivierGets: "5000BRL",
    },
    {
      OrderNo: "2459",
      SentDate: "Jan 19 2023",
      Receiver: "Laila Shihada",
      Amount: "1600NZD",
      ReceivierGets: "6000BRL",
    },
    {
      OrderNo: "2458",
      SentDate: "Jan 20 2023",
      Receiver: "Sophon Keo",
      Amount: "1700NZD",
      ReceivierGets: "7000BRL",
    },
  ];
  */

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
            //console.log(transactions);
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
