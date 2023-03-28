import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// Styles
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

const { brand, darkLight, tertiary } = Colors;
const Profile = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <ScrollView>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("./../assets/Logo.png")}
          />

          <Formik
            initialValues={{
              name: "",
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              MobileNum: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  values={values.name}
                />

                <MyTextInput
                  placeholder="Username"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  values={values.username}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Mobile Number"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("MobileNum")}
                  onBlur={handleBlur("MobileNum")}
                  values={values.MobileNum}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  values={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  values={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sign In</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
          <ExtraView>
            <ExtraText>Not Register Yet? </ExtraText>
            <TextLink>
              <TextLinkContent>Sign Up</TextLinkContent>
            </TextLink>
          </ExtraView>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};
const MyTextInput = ({
  lable,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={darkLight} />
      </LeftIcon>
      <StyledInputLable>{lable}</StyledInputLable>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Profile;
