// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
const Home = ({ navigation }) => {
    const login = "login";
    const receiverDetails = "receiver details"
    return (
        <View>
            <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
            <Text onPress={() => navigation.navigate("ReceiverDetails")}>{receiverDetails}</Text>
        </View>
    );
};
export default Home;
