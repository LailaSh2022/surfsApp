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
  const Profile = "Profile";
  return (
    <InnerContainer>
      <PageTitle>
        <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
      </PageTitle>
      <PageTitle>
        <Text onPress={() => navigation.navigate("Profile")}>{Profile}</Text>
      </PageTitle>
    </InnerContainer>
  );
};
export default Home;
