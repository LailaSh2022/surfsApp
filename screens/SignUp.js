import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Alert } from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons } from "@expo/vector-icons";
import PageFooter from "../components/PageFooter";
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
  UserImage,
  SubPageLogo,
  MediumPageLogo,
} from "./../components/Styles";
import { CheckUserNameExists, SignUpNewUser } from "../Database";

const { brand, darkLight, tertiary } = Colors;
const initialValues = {
  UserName: "",
  FirstName: "",
  LastName: "",
  DateOfBirth: "",
  Email: "",
  Phone_Number: "",
  Password: "",
  ConfirmPassword: "",
};
const onSubmit = (values) => {
  if (values.UserName == "") {
    Alert.alert("Error", "UserName cannot be empty");
    return;
  }
  CheckUserNameExists(values.UserName)
    .then((exists) => {
      if (exists) {
        Alert.alert("Error", "Username exists. Please choose another one!");
        return;
      }
    })
    .catch((error) => {
      console.log(`Error while checking user: ${error}`);
      return;
    });

  if (values.FirstName == "") {
    Alert.alert("Error", "FirstName cannot be empty");
    return;
  }

  if (values.LastName == "") {
    Alert.alert("Error", "LastName cannot be empty");
    return;
  }

  if (values.DateOfBirth == "") {
    Alert.alert("Error", "DateOfBirth cannot be empty");
    return;
  }

  if (values.Email == "") {
    Alert.alert("Error", "Email cannot be empty");
    return;
  }

  if (values.Phone_Number == "") {
    Alert.alert("Error", "Mobile Number cannot be empty");
    return;
  }

  if (values.Password == "") {
    Alert.alert("Error", "Password cannot be empty");
    return;
  }

  if (values.Password != values.ConfirmPassword) {
    Alert.alert("Error", "Password and Confirm Password must be the same");
    return;
  }
  SignUpNewUser(values);
};
const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <ScrollView>
        <StatusBar style="dark" />
        <ExtraView>
          <ExtraText>Enter your details below </ExtraText>
        </ExtraView>
        <InnerContainer>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="UserName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("UserName")}
                  onBlur={handleBlur("UserName")}
                  values={values.UserName}
                  //keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="FirstName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("FirstName")}
                  onBlur={handleBlur("FirstName")}
                  values={values.FirstName}
                />

                <MyTextInput
                  placeholder="LastName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("LastName")}
                  onBlur={handleBlur("LastName")}
                  values={values.LastName}
                />

                <MyTextInput
                  placeholder="Date of Birth"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("DateOfBirth")}
                  onBlur={handleBlur("DateOfBirth")}
                  values={values.DateOfBirth}
                />

                <MyTextInput
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("Email")}
                  onBlur={handleBlur("Email")}
                  values={values.Email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  placeholder="Mobile Number"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("Phone_Number")}
                  onBlur={handleBlur("Phone_Number")}
                  values={values.Phone_Number}
                  //keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("Password")}
                  onBlur={handleBlur("Password")}
                  values={values.Password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  placeholder="Confirm Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("ConfirmPassword")}
                  onBlur={handleBlur("ConfirmPassword")}
                  values={values.ConfirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Sign Up</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
          <ExtraView>
            <ExtraText>Already have an account? </ExtraText>
            <TextLink>
                <SignInLink />
              </TextLink>
          </ExtraView>
          <ExtraView>
            <ExtraText>By signing up you agree to our </ExtraText>
          </ExtraView>
          <ExtraView>
            <TextLinkContent>Terms of Use </TextLinkContent>
            <ExtraText>and </ExtraText>
            <TextLink>
              <TextLinkContent>Privacy Policy</TextLinkContent>
            </TextLink>
          </ExtraView>
        </InnerContainer>
      </ScrollView>
      <View style={{ flexDirection: "column", height: "17%" }} />
      <View>
        <PageFooter />
      </View>
    </StyledContainer>
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
export default SignUp;
