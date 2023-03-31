// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledTextInput,
  StyledInputLable,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../components/Styles";


const Home = ({ navigation }) => {
    const login = "login";
    const receiverDetails = "receiver details"
    const orderSummary = "order summary"
    const history = "history"
    return (
        <View>
            <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
            <Text onPress={() => navigation.navigate("ReceiverDetails")}>{receiverDetails}</Text>
            <Text onPress={() => navigation.navigate("OrderSummary")}>{orderSummary}</Text>
            <Text onPress={() => navigation.navigate("History")}>{history}</Text>
        </View>
    );
};
export default Home;
