import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const MyButton = ({ title, onPress, style }) => (
  <TouchableOpacity
    style={[{ backgroundColor: "#152A5F" }, style]}
    onPress={onPress}
  >
    <View
      style={{ alignItems: "center", justifyContent: "center", top: "25%" }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default MyButton;
