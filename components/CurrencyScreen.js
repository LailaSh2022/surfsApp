import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { BorderText, FlagImage } from "../components/Styles";

const API_URL = "https://api.apilayer.com/currency_data/convert";
const API_KEY = ""; //"w8IexBQMMawAcT8enFM8I1jXRoYK3dAE";

const CurrencyScreen = () => {
  const [convertedAmount1, setConvertedAmount1] = useState("");
  const [convertedAmount2, setConvertedAmount2] = useState("");
  const [convertedAmount3, setConvertedAmount3] = useState("");
  const [convertedAmount4, setConvertedAmount4] = useState("");

  const exchangeResult = (to, from, amount, setConvertedAmount) => {
    const url = `${API_URL}?to=${to}&from=${from}&amount=${amount}`;
    const headers = {
      apikey: API_KEY,
    };
    const request = {
      method: "GET",
      headers: headers,
      timeout: -1,
    };

    fetch(url, request)
      .then((response) => response.json())
      .then((data) => setConvertedAmount(data.result.toFixed(3)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    exchangeResult("NZD", "USD", 1, setConvertedAmount1);
    exchangeResult("AUD", "NZD", 1, setConvertedAmount2);
    exchangeResult("GBP", "NZD", 1, setConvertedAmount3);
    exchangeResult("CNY", "NZD", 1, setConvertedAmount4);

    const intervalId = setInterval(() => {
      exchangeResult("NZD", "USD", 1, setConvertedAmount1);
      exchangeResult("AUD", "NZD", 1, setConvertedAmount2);
      exchangeResult("GBP", "NZD", 1, setConvertedAmount3);
      exchangeResult("CNY", "NZD", 1, setConvertedAmount4);
    }, 12 * 60 * 60 * 1000); // Call the function every 12 hours

    return () => clearInterval(intervalId);
  }, []);
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
        <View style={{ width: "23%" }} />
        <Text>{convertedAmount1} NZD</Text>
      </View>
      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/AustraliaFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Australian Dollar</Text>
        <View style={{ width: "14%" }} />
        <Text>{convertedAmount2} NZD</Text>
      </View>
      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row", height: "11%" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/UKFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Pound sterling</Text>
        <View style={{ width: "19%" }} />
        <Text>{convertedAmount3} NZD</Text>
      </View>
      <View style={{ flexDirection: "column", height: "7%" }} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "3%" }} />
        <FlagImage source={require("./../assets/ChinaFlag.png")} />
        <View style={{ width: "10%" }} />
        <Text>Chinese Yuan</Text>
        <View style={{ width: "19%" }} />
        <Text> {convertedAmount4} NZD</Text>
      </View>
    </BorderText>
  );
};

export default CurrencyScreen;
