import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MyButton from "./MyButton";

const API_KEY = "dc17da5627284a82aec1e8de2ad69a67";

const CurrencyExchange = () => {
  const [baseAmount, setBaseAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetAmount, setTargetAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("NZD");
  const [totalAmount, setTotalAmount] = useState("");
  const [totalAmountWithfee, settotalAmountWithfee] = useState("");
  const [fee, setfee] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState("");
  const currencyOptions = [
    { label: "NZD", value: "NZD" },
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "AUD", value: "AUD" },
    { label: "CAD", value: "CAD" },
    { label: "BRL", value: "BRL" },
    { label: "KHR", value: "KHR" },
    { label: "INR", value: "INR" },
    { label: "EUR", value: "EUR" },
    { label: "CNY", value: "CNY" },
    // add more currency options as needed
  ];
  // Using API to convert the given amount
  const convertAmount = async () => {
    const response = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&base=${baseCurrency}`
    );
    const data = await response.json();
    const rate = data.rates[targetCurrency];
    const convertedAmount = parseFloat(baseAmount) * rate;
    const exchangeAmount = convertedAmount.toFixed(2);
    const totalAmount = (convertedAmount * 1.01).toFixed(2); // Calculate the total amount.
    const fee = (totalAmount - convertedAmount).toFixed(2);
    console.log(fee);
    const totalAmountWithfee = (convertedAmount - fee).toFixed(2);
    console.log(totalAmountWithfee);
    setTargetAmount(totalAmountWithfee); // Calculate the targer amount
    setTotalAmount(convertedAmount);
    settotalAmountWithfee(totalAmountWithfee);
    setfee(fee);
    setExchangeAmount(exchangeAmount);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          placeholder="Your Sent Exactly"
          style={styles.input}
          keyboardType="decimal-pad"
          value={baseAmount}
          onChangeText={setBaseAmount}
        />
        <Picker
          selectedValue={baseCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setBaseCurrency(itemValue)}
        >
          {currencyOptions.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>

        {/* <Text style={styles.currency}>{baseCurrency}</Text> */}
      </View>
      {/* style={{ alignItems: "flex-start", justifyContent: "flex-start" }} */}
      {/* <View> */}
      <Text>
        {exchangeAmount}
        {targetCurrency} Converted Amount
      </Text>
      <View style={{ height: "5%" }} />
      <Text>
        {fee}
        {targetCurrency} As %1.00 Total fee
      </Text>
      <View style={{ height: "5%" }} />
      <Text>
        {totalAmountWithfee}
        {targetCurrency} Total Amount will Convert
      </Text>
      {/* </View> */}
      {/* <View style={{ height: "1%" }} /> */}
      <View style={styles.row}>
        <TextInput
          placeholder="Recipient gets"
          style={styles.input}
          keyboardType="decimal-pad"
          value={targetAmount}
          onChangeText={setTargetAmount}
        />
        <Picker
          selectedValue={targetCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setTargetCurrency(itemValue)}
        >
          {currencyOptions.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>

        {/* <Text style={styles.currency}>{targetCurrency}</Text> */}
      </View>
      <View style={styles.row}>
        <MyButton
          title="Refresh"
          onPress={convertAmount}
          style={styles.button}
        />
        <View style={{ width: "10%" }} />
        <MyButton
          title="Transfer"
          onPress={convertAmount}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    width: "50%",
    textAlign: "left",
  },
  currency: {
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    fontSize: 18,
  },
  picker: {
    width: "40%",
  },
  button: {
    width: 70,
    height: 35,
    borderRadius: 5,
  },
});

export default CurrencyExchange;
