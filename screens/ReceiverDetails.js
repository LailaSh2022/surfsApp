import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  StyledBackButton,
  ButtonText,
  StyledContainer,
  StyledButton,
} from "./../components/Styles";

const ReceiverDetails = ({ route }) => {
  if (typeof route.params == "undefined") {
    return (
      <StyledContainer>
        <View style={{ flexDirection: "row" }}>
          <StyledBackButton>
            <ButtonText>{"<"}</ButtonText>
          </StyledBackButton>
          <Text style={styles.headline}> Receiver Details</Text>
        </View>
        <View style={{ fontSize: 18, marginTop: 30 }}>
          <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}>
            No info!
          </Text>
        </View>
      </StyledContainer>
    );
  }

  const { receiver } = route.params;
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
        <Text>
          {receiver.FirstName} {receiver.MiddleName} {receiver.LastName}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Email:</Text>
        <Text>{receiver.Email}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Mobile No:</Text>
        <Text>{receiver.MobileNumber}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Relationship:</Text>
        <Text>{receiver.Relationship}</Text>
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
        <Text style={{ width: "25%" }}>Currency:</Text>
        <Text style={{ paddingRight: "15%" }}>{receiver.Currency}</Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Swift Code:</Text>
        <Text style={{ paddingBottom: 30 }}>{receiver.Swift_Code}</Text>
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
