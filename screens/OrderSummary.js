import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  StyledContainer,
  StyledBackButton,
  ButtonText,
  StyledButton,
} from "./../components/Styles";

const OrderSummary = ({ route }) => {
  if (typeof route.params == "undefined") {
    return (
      <StyledContainer>
        <View style={{ flexDirection: "row" }}>
          <StyledBackButton>
            <ButtonText>{"<"}</ButtonText>
          </StyledBackButton>
          <Text style={styles.headline}> Order Summary</Text>
        </View>
        <View style={{ fontSize: 18, marginTop: 30 }}>
          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}>
            There is no order!!!
          </Text>
        </View>
      </StyledContainer>
    );
  }

  const { OrderSummary } = route.params;

  return (
    <StyledContainer>
      <View style={{ flexDirection: "row" }}>
        <StyledBackButton>
          <ButtonText>{"<"}</ButtonText>
        </StyledBackButton>
        <Text style={styles.headline}> Order Summary</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ width: "25%" }}>Order No:</Text>
        <Text>{OrderSummary.OrderId}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Date:</Text>
        <Text>{OrderSummary.Date}</Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Rate:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          1.00{OrderSummary.From_Currency} = {OrderSummary.Rate}
          {OrderSummary.To_Currency}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Transfer Info:</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Amount:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {OrderSummary.Amount}
          {OrderSummary.From_Currency}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Fee (1%):</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {(OrderSummary.Amount / 100).toFixed(2)}
          {OrderSummary.From_Currency}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Total:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {(OrderSummary.Amount + OrderSummary.Amount / 100).toFixed(2)}
          {OrderSummary.From_Currency}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "40%" }}>Total Receiver gets:</Text>
        <Text style={{ paddingBottom: 30, fontSize: 20, marginTop: -5 }}>
          {(OrderSummary.Amount * OrderSummary.Rate).toFixed(2)}
          {OrderSummary.From_Currency}
        </Text>
      </View>
      <StyledButton>
        <ButtonText>Continue</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  headline: {
    flex: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
    color: "#152A5F",
  },

  line: {
    paddingTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default OrderSummary;
