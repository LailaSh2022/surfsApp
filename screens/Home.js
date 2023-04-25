// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
import Profile from "./Profile";
import HomePage from "./HomePage";
import { GetReceiverDetails, GetAllOrderByUserId } from "../Database";
import Unsubscribe from "./Unsubscribe";

const Home = ({ navigation }) => {
  const login = "login";
  const Profile = "Profile";
  const HomePage = "HomePage";
  const receiverDetails = "receiver details";
  const orderSummary = "order summary";
  const history = "history";
  const SignUp = "SignUp";
  const AddReceiver = "AddReceiver";
  const Contactus = "Contactus";
  const Unsubscribe = "Unsubscribe";

  var receiver;
  //var bank_info;
  GetReceiverDetails(1)
    .then((result) => {
      receiver = result;
    })
    .catch((error) => {
      console.log(`Error while getting receiver details: ${error}`);
      return;
    });

  //for testing

  var OrderSummary = {
    OrderId: 1,
    Date: "16/04/2023",
    Rate: 3.05,
    From_Currency: "NZD",
    To_Currency: "BRL",
    Amount: 350,
    Fee: 0.01,
  };

  const transactions = [];
  GetAllOrderByUserId(2)
    .then((result) => {
      const orders = result;
      //const transactions = [];
      orders.map((order) => {
        GetReceiverDetails(order.RecipientId)
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
            console.log(history);
            transactions.push(history);
          })
          .catch((error) => {
            console.log(`Error while getting receiver details: ${error}`);
            return;
          });
      });
    })
    .catch((error) => {
      console.log(`Error while getting order details: ${error}`);
      return;
    });

  return (
    <View>
      <Text onPress={() => navigation.navigate("HomePage")}>{HomePage}</Text>
      <Text onPress={() => navigation.navigate("Profile")}>{Profile}</Text>

      <Text onPress={() => navigation.navigate("SignUp")}>{SignUp}</Text>
      <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
      <Text onPress={() => navigation.navigate("AddReceiver")}>
        {AddReceiver}
      </Text>
      <Text
        onPress={() => navigation.navigate("ReceiverDetails", { receiver })}
      >
        {receiverDetails}
      </Text>
      <Text
        onPress={() => navigation.navigate("OrderSummary", { OrderSummary })}
      >
        {orderSummary}
      </Text>
      <Text onPress={() => navigation.navigate("History", { transactions })}>
        {history}
      </Text>
      <Text onPress={() => navigation.navigate("Unsubscribe", { Unsubscribe })}>
        {Unsubscribe}
      </Text>
      <Text onPress={() => navigation.navigate("Contactus", { Contactus })}>
        {Contactus}
      </Text>
    </View>
  );
};
export default Home;
