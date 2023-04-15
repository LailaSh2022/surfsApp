import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  StyledBackButton,
  ButtonText,
  StyledContainer,
  StyledButton,
} from "./../components/Styles";

const ReceiverDetails = ({ route }) => {
  const { receiver, bank_info } = route.params;
  console.log(receiver);
  return (
    <StyledContainer>
      <View style={{ flexDirection: "row" }}>
        <StyledBackButton>
          <ButtonText>{"<"}</ButtonText>
        </StyledBackButton>
        <Text style={styles.headline}> Receiver Details</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={{ width: "25%" }}>Name:</Text>
          <Text>{receiver.FirstName} {receiver.MiddleName} {receiver.LastName}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Account No:</Text>
              <Text>{receiver.Bank_Account_Number}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Address:</Text>
              <Text style={{ paddingRight: "15%" }}>{receiver.Address}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Email:</Text>
        <Text>{receiver.Email}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Bank Info:</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Name:</Text>
        <Text>{bank_info.Bank_Name}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Address:</Text>
              <Text style={{paddingRight:"15%"} }>{bank_info.Address}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Swift Code:</Text>
        <Text style={{ paddingBottom: 30 }}>{bank_info.Swift_Code}</Text>
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
});

export default ReceiverDetails;
