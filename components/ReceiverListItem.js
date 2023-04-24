import react from "react";
import {View, Text} from "react-native";
import ReceiverList from "../screens/ReceiverList";

const ReceiverListItem = ({ item }) => {
    return (
      <View>
        <Text>{item.FirstName} {item.LastName}</Text>
        <Text>{item.Currency}</Text>
        <Text>{item.BankAccount}</Text>
        {/* Add other fields you want to display */}
      </View>
    );
  };
  export default ReceiverListItem;