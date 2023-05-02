import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  StyledBackButton,
  ButtonText,
  StyledContainer,
  StyledButton,
} from "./../components/Styles";
import { GetRecipientDetails } from "../Database"; // Added by Laila Shihada
//* ************************************************************** */
// Added by Laila Shihada
const ReceiverDetails = ({ route }) => {
  const navigation = useNavigation();
  const [recipientDetails, setRecipientDetails] = useState(null);
  useEffect(() => {
    const fetchRecipientDetails = async () => {
      try {
        console.log("global.ReceiverId[0]: " + global.ReceiverId[0]);
        const details = await GetRecipientDetails(global.ReceiverId[0]);
        console.log("details: " + details);
        setRecipientDetails(details);
        console.log("recipientDetails: " + recipientDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipientDetails();
    
  }, [global.ReceiverId[0]]);
  //* ************************************************************** */
  // if (typeof route.params == "undefined") {
  //   return (
  //     <StyledContainer>
  //       <View style={{ flexDirection: "row" }}>
  //         <StyledBackButton>
  //           <ButtonText>{"<"}</ButtonText>
  //         </StyledBackButton>
  //         <Text style={styles.headline}> Receiver Details</Text>
  //       </View>
  //       <View style={{ fontSize: 18, marginTop: 30 }}>
  //         <Text style={{ textAlign: "center", fontSize: 15, marginTop: 50 }}>
  //           No info!
  //         </Text>
  //       </View>
  //     </StyledContainer>
  //   );
  // }

  // const { receiver } = route.params;

  // Updated by Laila Shihada to get the data from the database (Changing the receiver to recipientDetails? on the layout view )
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
          {recipientDetails?.FirstName} {recipientDetails?.MiddleName}{" "}
          {recipientDetails?.LastName}
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Email:</Text>
        <Text>{recipientDetails?.Email}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Mobile No:</Text>
        <Text>{recipientDetails?.MobileNumber}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Relationship:</Text>
        <Text>{recipientDetails?.Relationship}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Account No:</Text>
        <Text>{recipientDetails?.Bank_Account_Number}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Address:</Text>
        <Text style={{ paddingRight: "15%" }}>{recipientDetails?.Address}</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Currency:</Text>
        <Text style={{ paddingRight: "15%" }}>
          {recipientDetails?.Currency}
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text style={{ width: "25%" }}>Swift Code:</Text>
        <Text style={{ paddingBottom: 30 }}>
          {recipientDetails?.Swift_Code}
        </Text>
      </View>

      <StyledButton onPress={() => navigation.navigate("OrderSummary")}>
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
