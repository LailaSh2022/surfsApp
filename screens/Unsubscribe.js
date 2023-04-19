import react from "react";
import { StatusBar,StyleSheet, View, Text, Button, ScrollView } from "react-native";
import {
    UnsubscribeLogo,
  StyledContainer,
  PageTitle,
  InnerContainer,
} from "../components/Styles";

const Unsubscribe = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Unsubscribe</PageTitle>
        <UnsubscribeLogo
          resizeMode="cover"
          source={require("./../assets/Unsubscribe.png")}
        />
      </InnerContainer>
    </StyledContainer>
  );
};

export default Unsubscribe;
