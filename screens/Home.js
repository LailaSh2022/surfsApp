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
  const ReceiverList = "ReceiverList";

  var receiver;
  //var bank_info;
  GetReceiverDetails(2, 3)
    .then((result) => {
      receiver = result;
      console.log(receiver);
    })
    .catch((error) => {
      console.log(`Error while getting receiver details: ${error}`);
      return;
    });

  //for testing

  var OrderSummary = {
    OrderId: 1,
    Date: "13/02/2023",
    Rate: 0.5912,
    From_Currency: "NZD",
    To_Currency: "USD",
    Amount: 350,
    Fee: 0.01,
  };

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

      <Text onPress={() => navigation.navigate("Unsubscribe", { Unsubscribe })}>
        {Unsubscribe}
      </Text>
      <Text onPress={() => navigation.navigate("Contactus", { Contactus })}>
        {Contactus}
      </Text>
      <Text
        onPress={() => navigation.navigate("ReceiverList", { ReceiverList })}
      >
        {ReceiverList}
      </Text>
    </View>
  );
};
export default Home;
