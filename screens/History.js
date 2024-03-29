import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "./../components/HistoryItem";
import {
  StyledContainer,
  StyledBackButton,
  ButtonText,
} from "./../components/Styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { GetReceiverDetails, GetAllOrderByUserId } from "../Database";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { userId } = route.params;

  useEffect(() => {
    if (!userId) {
      console.log("Info: userId is undefined");
      return;
    }

    GetAllOrderByUserId(userId)
      .then((result) => {
        const orders = result;
        Promise.all(
          orders.map((order) =>
            GetReceiverDetails(order.RecipientId, userId).then((result) => {
              const fullname = result.FirstName + " " + result.LastName;
              const amount = order.Amount * order.Exchange_Rate;
              const receiverGet = (amount - amount * 0.01).toFixed(2);
              const history = {
                OrderNo: order.OrderId,
                SentDate: order.Order_Date,
                Receiver: fullname,
                Amount: order.Amount,
                ReceivierGets: receiverGet,
                From: order.From_Currency,
                To: order.To_Currency,
              };
              return history;
            })
          )
        ).then((histories) => {
          setTransactions(histories);
        });
      })
      .catch((error) => {
        console.log(`Error while getting order details: ${error}`);
      });
  }, [userId, GetAllOrderByUserId]);

  return (
    <StyledContainer>
      <View>
        <View style={{ flexDirection: "row" }}>
          <StyledBackButton
            onPress={() => navigation.navigate("HomePage", { userId: userId })}
          >
            <ButtonText>{"<"}</ButtonText>
          </StyledBackButton>
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
