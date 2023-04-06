import styled from "styled-components";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#2854d9",
  blue: "#152A5F",
  gray: "#979797",
};
const { primary, secondary, tertiary, darkLight, brand, blue, gray } = Colors;
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${statusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;
export const SubPageLogo = styled.Image`
  width: 150px;
  height: 100px;
  padding: 10px;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${blue};
  padding: 10px;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: regular;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;
export const StyledSmallFormArea = styled.View`
  align-items: right;
`;
export const StyledTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${blue}
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;
export const StyledInputLable = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;
export const LeftIcon = styled.View`
  left: 15px;
  top: 28px;
  position: absolute;
  z-index = 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 28px;
  position: absolute;
  z-index = 1;
`;
export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${blue};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`;
export const StyledSmallButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: ${blue};
  justify-content: center;
  border-radius: 10px;
  margin-vertical: 1px;
  height: 40px;
  width: 100px;
`;

export const StyledBackButton = styled.TouchableOpacity`
  background-color: ${blue};
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  text-align: center;
`;
export const SmallButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  text-align: center;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
export const Line = styled.View`
  hight: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;
export const BorderText = styled.View`
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${tertiary};
`;
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${blue};
  font-size: 15px;
`;
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
export const UserImage = styled.Image`
  width: 90px;
  height: 100px;
  border-radius: 50px;
  border: 8px;
  border-color: ${blue};
  border-style: solid;
`;
export const FlagImage = styled.Image`
  width: 50px;
  height: 25px;
  border: 1px;
  border-color: ${blue};
  border-style: solid;
`;
export const Container = styled.View`
  background-color: ${primary};
  width: 90%;
  height: 48px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-vertical: 11px;
`;
export const ButtonContainer = styled.TouchableOpacity`
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${blue};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const SideButtonText = styled.Text`
  font-weight: 600;
  font-size: 20px;
  padding-horizontal: 16px;
  color: ${primary};
`;
export const Border = styled.View`
  height: 48px;
  width: ${StyleSheet.hairlineWidth}px;
  background-color: ${blue};
`;
export const Input = styled.TextInput`
  height: 48px;
  flex: 1;
  font-size: 18px;
  border: 1px;
  border-color: ${blue};
  border-style: solid;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-horizontal: 8px;
  color: ${darkLight};
`;
