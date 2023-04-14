import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { BorderText, FlagImage } from "../components/Styles";

const CurrencyScreen = () => {
  return (
    <BorderText>
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "25%" }} />
        <Text>Currency</Text>
        <View style={{ width: "25%" }} />
        <Text>Exchange Rate</Text>
      </View>
      <View style={{ flexDirection: "column", height: "8%" }} />
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/USFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>USA Dollar </Text>
        <View style={{ width: "30%" }} />
        <Text>USD</Text>
      </View>

      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/AustraliaFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Australian Dollar</Text>
        <View style={{ width: "21%" }} />
        <Text>USD</Text>
      </View>
      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/UKFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Pound sterling</Text>
        <View style={{ width: "25%" }} />
        <Text>USD</Text>
      </View>

      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/ChinaFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Chinese Yuan</Text>
        <View style={{ width: "27%" }} />
        <Text>USD</Text>
      </View>
      
    </BorderText>
  );
};

export default CurrencyScreen;
