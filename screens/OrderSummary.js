import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  StyledContainer,
  StyledBackButton,
  ButtonText,
  StyledButton,
} from "./../components/Styles";
import "../global";

const OrderSummary = ({ route }) => {
  // if (typeof route.params == "undefined") {
  //   return (
  //     <StyledContainer>
  //       <View style={{ flexDirection: "row" }}>
  //         <StyledBackButton>
  //           <ButtonText>{"<"}</ButtonText>
  //         </StyledBackButton>
  //         <Text style={styles.headline}> Order Summary</Text>
  //       </View>
  //       <View style={{ fontSize: 18, marginTop: 30 }}>
  //         <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}>
  //           There is no order!!!
  //         </Text>
  //       </View>
  //     </StyledContainer>
  //   );
  // }

  // const { OrderSummary } = route.params;
  // Updated by Laila Shihada to get the data from the global.js file
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
        {/* <Text>{OrderSummary.OrderId}</Text>     -----> Please Uncomit after update the code (Laila Shihada)*/}
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Date:</Text>
        {/* <Text>{OrderSummary.Date}</Text> -----> Please Uncomit after update the code (Laila Shihada) */}
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Rate:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          1.00{global.FromCurrency[0]} = {global.rate[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Transfer Info:</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Amount:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.FromAmount[0]}
          {global.FromCurrency[0]}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Fee (1%):</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.fee[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Total:</Text>
        <Text style={{ fontSize: 20, marginTop: -5 }}>
          {global.Amount[0]}
          {global.ToCurrency[0]}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "40%" }}>Total Receiver gets:</Text>
        <Text style={{ paddingBottom: 30, fontSize: 20, marginTop: -5 }}>
          {global.Amount[0]}
          {global.ToCurrency[0]}
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
