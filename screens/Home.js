// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
import Profile from "./Profile";
import HomePage from "./HomePage";
import { GetReceiverDetails } from "../Database";

const Home = ({ navigation }) => {
  const login = "login";
  const Profile = "Profile";
  const HomePage = "HomePage";
  const receiverDetails = "receiver details";
  const orderSummary = "order summary";
  const history = "history";
  const SignUp = "SignUp";
  // const AddReceiver = "AddReceiver";

  var receiver;
  GetReceiverDetails(1)
    .then((results) => {
      receiver = results;
    })
    .catch((error) => {
      console.log(`Error while checking user: ${error}`);
      return;
    });

  return (
    <View>
      <Text onPress={() => navigation.navigate("HomePage")}>{HomePage}</Text>
      <Text onPress={() => navigation.navigate("SignUp")}>{SignUp}</Text>
      <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
      <Text onPress={() => navigation.navigate("Profile")}>{Profile}</Text>

      <Text
        onPress={() => navigation.navigate("ReceiverDetails", { receiver })}
      >
        {receiverDetails}
      </Text>
      <Text onPress={() => navigation.navigate("OrderSummary")}>
        {orderSummary}
      </Text>
      <Text onPress={() => navigation.navigate("History")}>{history}</Text>
    </View>
  );
};
export default Home;
