import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { BorderText, FlagImage } from "../components/Styles";

const CurrencyScreen = () => {
  return (
    <BorderText>
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={{ width: 100 }} />
        <Text>Currency</Text>
        <View style={{ width: 90 }} />
        <Text>Exchange Rate</Text>
      </View>
      <View style={{ flexDirection: "column", height: 10 }} />
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={{ width: 10 }} />
        <FlagImage source={require("./../assets/USFlag.png")} />
        <View style={{ width: 30 }} />
        <Text>USA Dollar </Text>
        <View style={{ width: 122 }} />
        <Text>USD</Text>
      </View>

      <View style={{ flexDirection: "column", height: 10 }} />
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={{ width: 10 }} />
        <FlagImage source={require("./../assets/AustraliaFlag.png")} />
        <View style={{ width: 30 }} />
        <Text>Australian Dollar</Text>
        <View style={{ width: 90 }} />
        <Text>USD</Text>
      </View>
      <View style={{ flexDirection: "column", height: 10 }} />
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={{ width: 10 }} />
        <FlagImage source={require("./../assets/UKFlag.png")} />
        <View style={{ width: 30 }} />
        <Text>Pound sterling</Text>
        <View style={{ width: 102 }} />
        <Text>USD</Text>
      </View>

      <View style={{ flexDirection: "column", height: 10 }} />
      <View style={{ flexDirection: "row", height: 30 }}>
        <View style={{ width: 10 }} />
        <FlagImage source={require("./../assets/ChinaFlag.png")} />
        <View style={{ width: 30 }} />
        <Text>Chinese Yuan</Text>
        <View style={{ width: 107 }} />
        <Text>USD</Text>
      </View>
      <View style={{ flexDirection: "column", height: 10 }} />
    </BorderText>
  );
};

export default CurrencyScreen;
