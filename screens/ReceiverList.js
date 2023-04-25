import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "../components/HistoryItem";
import { ExtraView, StyledContainer } from "../components/Styles";
import { AddNewReceiver, GetAllOrderByUserId, GetReceiverDetails } from "../Database";
import { useRoute } from "@react-navigation/native";
import ReceiverListItem from "./../components/ReceiverListItem";
import DeleteReceiver from "../components/DeleteReceiver";
import ReceiverDetails from "" 


const ReceiverList = (navigation) => {
  ////// Get user Id. Added by Laila.
  const route = useRoute();
  const { userId } = route.params;
  console.log("ReceiverList_userId: ", userId);
  ////// Get user Id. Added by Tati.
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  useEffect(() => {
    if (!userId) {
      console.log("Info: userId is undefined");
    }
  }, [userId]);
  //////
  let transactions = [];
  if (userId)
    GetReceiverDetails(userId)
      .then((result) => {
        const orders = result;
        orders.map((order) => {
          GetReceiverDetails(order.OrderId)
            .then((result) => {
              const fullname = result.FirstName + " " + result.LastName;
              const receiverGet = (order.Amount * order.Exchange_Rate).toFixed(
                2
              );
              const Recipients = {
                BankAccount: Recipients.BankAccount,
                Currency: Recipients.Currency,
              };
              transactions.push(Recipients);
            })
            .catch((error) => {
              console.log(`Error while getting bank_info: ${error}`);
              return;
            });
        });
      })
      .catch((error) => {
        console.log(`Error while getting order details: ${error}`);
        return;
      });
  else
    GetReceiverDetails(global.userId[0])
      .then((result) => {
        const orders = result;
        orders.map((order) => {
          GetReceiverDetails(order.OrderId)
            .then((result) => {
              const fullname = result.FirstName + " " + result.LastName;
              const receiverGet = (order.Amount * order.Exchange_Rate).toFixed(
                2
              );
              const Recipients = {
                BankAccount: Recipients.BankAccount,
                Currency: Recipients.Currency,
              };
              transactions.push(Recipients);
              setSelectedRecipients(Recipients);
            })
            .catch((error) => {
              console.log(`Error while getting bank_info: ${error}`);
              return;
            });
        });
      })
      .catch((error) => {
        console.log(`Error while getting order details: ${error}`);
        return;
      });

  const handleselectedRecipient = Recipients => {
    setSelectedRecipient(Recipients);
    navigation.navigate('ReceiverDetails', {Recipients});
  }   
  


  return (
    <StyledContainer>
      <StyledFormArea>

      
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.headline}> Receiver List</Text>
          </View>
          <Text style={{ paddingTop: 15, color: "blue", fontSize: 15 }}>
            Receiver List
          </Text>
          <StyledSideSmallButton onPress={() => navigation.navigate("AddReceiver")}>
            <SmallButtonText> + </SmallButtonText>
          </StyledSideSmallButton>
          
          {transactions.map((item, i) => (
            <ReceiverList item={item} key={i} />

            
          ))}
        </View>
        <StyledButton onPress={() => navigation.navigate("ReceiverDetails")}>
            <ButtonText>Confirm</ButtonText>
        </StyledButton>

      </StyledFormArea>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  headline: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
    color: "#152A5F",
  },
});

export default ReceiverList;
