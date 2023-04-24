import React from "react";
import { View, Text } from "react-native";

const HistoryItem = (props) => {
  const { OrderNo, SentDate, Receiver, Amount, ReceivierGets, From, To } =
    props.item;
    //console.log(props.item)
  return (
    <View>
      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        <Text style={{ width: "75%" }}>{Receiver}</Text>
        <Text>
          {Amount}
          {From}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ width: "75%" }}>
          Sent:{SentDate}, Order No: {OrderNo}
        </Text>
        <Text>
          {ReceivierGets}
          {To}
        </Text>
      </View>
    </View>
  );
};

export default HistoryItem;
