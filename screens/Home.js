// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
const Home = ({ navigation }) => {
    const login = "login";
    return (
        <View>
            <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
        </View>
    );
};
export default Home;
