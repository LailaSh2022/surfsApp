import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { Footer, GooglePlayBadge, ExtraSmallText } from "./Styles";

const PageFooter = () => {
  return (
    <Footer>
      <View style={{ position: "absolute" }}>
        <GooglePlayBadge
          resizeMode="cover"
          source={require("./../assets/google-play-badge.png")}
          style={{
            left: "0%",
            top: "0%",
          }}
        />
      </View>
      <View style={{ height: "50%" }} />
      <View>
        <ExtraSmallText>Join Us for fast and secure online </ExtraSmallText>
        <ExtraSmallText>money transfer</ExtraSmallText>
      </View>
    </Footer>
  );
};

export default PageFooter;
