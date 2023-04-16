import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "./../components/HistoryItem";
import { StyledContainer } from "./../components/Styles";
import { GetAllOrderByUserId } from "../Database";

const History = () => {
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

  GetAllOrderByUserId(1)
    .then((result) => {
      console.log(result);
      const orders = result;
      orders.map((order) => console.log(order));

      /*
      GetReceiverBankInfo(receiver.Bank_Info)
        .then((result) => {
          bank_info = result;
        })
        .catch((error) => {
          console.log(`Error while getting bank_info: ${error}`);
          return;
        });
        */
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
