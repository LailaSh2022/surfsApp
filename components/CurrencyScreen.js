import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { BorderText, FlagImage } from "../components/Styles";

// API
const API_URL = "https://openexchangerates.org/api/latest.json"; // Using open exchanger rates api
const API_KEY = "dc17da5627284a82aec1e8de2ad69a67"; // Api Key

const CurrencyScreen = () => {
  const [convertedAmount1, setConvertedAmount1] = useState("");
  const [convertedAmount2, setConvertedAmount2] = useState("");
  const [convertedAmount3, setConvertedAmount3] = useState("");
  const [convertedAmount4, setConvertedAmount4] = useState("");

  const exchangeResult = (to, from, amount, setConvertedAmount) => {
    const url = `${API_URL}?app_id=${API_KEY}&format=json`; // Passing values for the api.
    const headers = {
      apikey: API_KEY,
    };
    const request = {
      // Create the get request to retreive the data from the api.
      method: "GET",
      headers: headers,
      timeout: -1,
    };
    fetch(url, request)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        const exchangeRate = (data.rates[to] / data.rates[from]) * amount;
        setConvertedAmount(exchangeRate.toFixed(3));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    exchangeResult("NZD", "USD", 1, setConvertedAmount1); // Get the exchange rate for 1 USD to NZD
    exchangeResult("AUD", "NZD", 1, setConvertedAmount2); // Get the exchange rate for 1 AUD to NZD
    exchangeResult("GBP", "NZD", 1, setConvertedAmount3); // Get the exchange rate for 1 GBP to NZD
    exchangeResult("CNY", "NZD", 1, setConvertedAmount4); // Get the exchange rate for 1 CNY to NZD

    // Send a request every 12 hours to update the currency screen.
    const intervalId = setInterval(() => {
      exchangeResult("NZD", "USD", 1, setConvertedAmount1);
      exchangeResult("AUD", "NZD", 1, setConvertedAmount2);
      exchangeResult("GBP", "NZD", 1, setConvertedAmount3);
      exchangeResult("CNY", "NZD", 1, setConvertedAmount4);
    }, 12 * 60 * 60 * 1000); // Call the function every 12 hours

    return () => clearInterval(intervalId);
  }, []);
  return (
    //Display the Currency Screen
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
