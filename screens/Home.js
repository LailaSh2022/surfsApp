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
    return (
        <View>
            <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
        </View>
    );
};
export default Home;
