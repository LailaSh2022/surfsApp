import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons } from "@expo/vector-icons";
import PageFooter from "../components/PageFooter";
import UnsubscribeLink from "../components/UnsubscribeLink";
import { useRoute } from "@react-navigation/native";
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
import {
  CheckUserNameExists,
  getUser,
  updateExistingUser,
  deleteUser,
} from "../Database";

import {
  getUserInfoFromServer,
  UpdateUserInfoIntoServer,
} from "../DataSynchronization";

import NetInfo from "@react-native-community/netinfo";

const { brand, darkLight, tertiary } = Colors;
const onSubmit = (values) => {
  if (values.UserName == "") {
    Alert.alert("Error", "UserName cannot be empty");
    return;
  }

  /*
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
    */

  if (values.FirstName == "") {
    Alert.alert("Error", "FirstName cannot be empty");
    return;
  }

  if (values.LastName == "") {
    Alert.alert("Error", "LastName cannot be empty");
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
  updateExistingUser(values);
  
  //synchronize user data to server if there is any connection
  NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    if (state.isConnected) {
      UpdateUserInfoIntoServer(values);
    }
  });
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
  const route = useRoute();
  const { userId } = route.params || {};
  console.log("ProfilePage - userId: " + userId);
  useEffect(() => {
    getUser(userId).then((data) => setUserData(data));
  }, [userId]);
  console.log(userData);

  //Check if the user's data has been fetched before rendering the form
  if (!userData) {
    return <ActivityIndicator />;
  }
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <InnerContainer>
            <View
              style={{
                top: 0,
                marginTop: "-10%",
              }}
            >
              <MediumPageLogo
                resizeMode="cover"
                source={require("./../assets/Logo.png")}
              />
            </View>
            <PageTitle>User Profile</PageTitle>
            <Formik
              initialValues={{
                Id: userData.Id,
                FirstName: userData.FirstName,
                LastName: userData.LastName,
                UserName: userData.UserName,
                Email: userData.Email,
                Phone_Number: userData.Phone_Number,
                Password: "",
                ConfirmPassword: "",
              }}
              onSubmit={onSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    placeholder="First Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("FirstName")}
                    onBlur={handleBlur("FirstName")}
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
                    onChangeText={handleChange("UserName")}
                    onBlur={handleBlur("UserName")}
                    defaultValue={userData.UserName}
                    values={values.UserName}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    placeholder="Email Address"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Email")}
                    onBlur={handleBlur("Email")}
                    values={values.Email}
                    defaultValue={userData.Email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    placeholder="Mobile Number"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Phone_Number")}
                    onBlur={handleBlur("Phone_Number")}
                    values={values.Phone_Number}
                    defaultValue={userData.Phone_Number}
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
                    <ButtonText>Update</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>
            <ExtraView>
              <ExtraText>Want to Unsubscribe? </ExtraText>
              <TextLink>
                <UnsubscribeLink userId={userId} onDeleteUser={deleteUser} />
              </TextLink>
            </ExtraView>
          </InnerContainer>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={{ flexDirection: "column", height: "17%" }} />
      {/* <View>
        <PageFooter />
      </View> */}
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
export default Profile;
