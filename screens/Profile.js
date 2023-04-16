import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
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
import { CheckUserNameExists, getUser, updateExistingUser } from "../Database";
const { brand, darkLight, tertiary } = Colors;
const onSubmit = (values) => {
  if (values.UserName == "") {
    Alert.alert("Error", "UserName cannot be empty");
    return;
  }
  CheckUserNameExists(values.userName)
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

  if (values.firstName == "") {
    Alert.alert("Error", "FirstName cannot be empty");
    return;
  }

  if (values.lastName == "") {
    Alert.alert("Error", "LastName cannot be empty");
    return;
  }

  if (values.email == "") {
    Alert.alert("Error", "Email cannot be empty");
    return;
  }

  if (values.MobileNum == "") {
    Alert.alert("Error", "Mobile Number cannot be empty");
    return;
  }

  if (values.password == "") {
    Alert.alert("Error", "Password cannot be empty");
    return;
  }

  if (values.password != values.confirmPassword) {
    Alert.alert("Error", "Password and Confirm Password must be the same");
    return;
  }
  updateExistingUser(values);
};
/*
// User Image's code. 
<View
        style={{
          position: "absolute",
          left: "1%",
          top: "0.5%",
          bottom: "2%",
        }}
      >
        <UserImage
          source={require("./../assets/UserImage.png")}
          style={{
            position: "absolute",
            marginTop: 1,
          }}
        />
      </View> */
const Profile = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [userData, setUserData] = useState(null);
  const userId = 2;

  useEffect(() => {
    getUser(userId).then((data) => setUserData(data));
  }, [userId]);
  console.log(userData);

  // Check if the user's data has been fetched before rendering the form
  if (!userData) {
    return <ActivityIndicator />;
  }
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <ScrollView>
        <InnerContainer>
          <MediumPageLogo
            resizeMode="cover"
            source={require("./../assets/Logo.png")}
          />
          <PageTitle>User Profile</PageTitle>
          <Formik
            initialValues={{
              Id: userData.Id,
              firstName: userData.FirstName,
              lastName: userData.LastName,
              username: userData.UserName,
              email: userData.Email,
              MobileNum: userData.Phone_Number,
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="First Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  defaultValue={userData.FirstName}
                  values={values.FirstName}
                />

                <MyTextInput
                  placeholder="Last Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("LastName")}
                  onBlur={handleBlur("LastName")}
                  defaultValue={userData.LastName}
                  values={values.LastName}
                />

                <MyTextInput
                  placeholder="Username"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  defaultValue={userData.UserName}
                  values={values.username}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  defaultValue={userData.Email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  placeholder="Mobile Number"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("MobileNum")}
                  onBlur={handleBlur("MobileNum")}
                  values={values.MobileNum}
                  defaultValue={userData.MobileNum}
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
                  <ButtonText>Update</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
          <ExtraView>
            <ExtraText>Want to Unsubscribe? </ExtraText>
            <TextLink>
              <TextLinkContent>Unsubscribe</TextLinkContent>
            </TextLink>
          </ExtraView>
        </InnerContainer>
      </ScrollView>
      <View style={{ flexDirection: "column", height: "17%" }} />
    </StyledContainer>
  );
};
/*<View>
        <PageFooter />
      </View> */
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
