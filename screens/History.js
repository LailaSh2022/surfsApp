import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryItem from "./../components/HistoryItem";
import { StyledContainer } from "./../components/Styles";

const History = ({ route }) => {
  //console.log(route.params);
  let { transactions } = route.params;

  return (
    <StyledContainer>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headline}> History</Text>
        </View>
        <Text style={{ paddingTop: 15, color: "blue", fontSize: 15 }}>
          Transactions
        </Text>
        {transactions.map((item, i) => (
          <HistoryItem item={item} key={i} />
        ))}
      </View>
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

export default History;
