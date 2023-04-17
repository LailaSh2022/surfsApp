// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
import Profile from "./Profile";
import HomePage from "./HomePage";
import { GetReceiverDetails, GetReceiverBankInfo } from "../Database";

const Home = ({ navigation }) => {
  const login = "login";
  const Profile = "Profile";
  const HomePage = "HomePage";
  const receiverDetails = "receiver details";
  const orderSummary = "order summary";
  const history = "history";
  const SignUp = "SignUp";
  const AddReceiver = "AddReceiver";
  const ContactUs = "ContactUs";


  var receiver;
  var bank_info;
  GetReceiverDetails(1)
    .then((result) => {
      receiver = result;
      GetReceiverBankInfo(receiver.Bank_Info)
        .then((result) => {
          bank_info = result;
        })
        .catch((error) => {
          console.log(`Error while getting bank_info: ${error}`);
          return;
        });
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

  return (
    <View>
      <Text onPress={() => navigation.navigate("HomePage")}>{HomePage}</Text>
      <Text onPress={() => navigation.navigate("SignUp")}>{SignUp}</Text>
      <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
      <Text onPress={() => navigation.navigate("Profile")}>{Profile}</Text>
      <Text onPress={() => navigation.navigate("ContactUs")}>{ContactUs}</Text>

      <Text onPress={() => navigation.navigate("AddReceiver")}>
        {AddReceiver}
      </Text>

      <Text
        onPress={() =>
          navigation.navigate("ReceiverDetails", { receiver, bank_info })
        }
      >
        {receiverDetails}
      </Text>
      <Text
        onPress={() => navigation.navigate("OrderSummary", { OrderSummary })}
      >
        {orderSummary}
      </Text>
      <Text onPress={() => navigation.navigate("History")}>{history}</Text>
    </View>
  );
};
export default Home;
