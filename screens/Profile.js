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
const { brand, darkLight, tertiary } = Colors;
// Input Validation.
const onSubmit = (values) => {
  if (values.UserName == "") {
    Alert.alert("Error", "UserName cannot be empty");
    return;
  }
  // Check if username is exsits on the database.
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
  // If password not equal confirm password.
  if (values.password != values.confirmPassword) {
    Alert.alert("Error", "Password and Confirm Password must be the same");
    return;
  }
  updateExistingUser(values); // Using updateExistingUser function to update the given data.
};

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
    // Display the loading indicator if the userId is undefined.
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
                source={require("./../assets/Logo.png")} // Display the logo image
              />
            </View>
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
                    // First Name.
                    placeholder="First Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    defaultValue={userData.FirstName}
                    values={values.FirstName}
                  />

                  <MyTextInput
                    // Last Name.
                    placeholder="Last Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("LastName")}
                    onBlur={handleBlur("LastName")}
                    defaultValue={userData.LastName}
                    values={values.LastName}
                  />

                  <MyTextInput
                    // Username.
                    placeholder="Username"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    defaultValue={userData.UserName}
                    values={values.username}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    // Email address.
                    placeholder="Email Address"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    values={values.email}
                    defaultValue={userData.Email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    // Mobile Number.
                    placeholder="Mobile Number"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("MobileNum")}
                    onBlur={handleBlur("MobileNum")}
                    values={values.MobileNum}
                    defaultValue={userData.Phone_Number}
                  />
                  <MyTextInput
                    // Password.
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
                    // Confirm password.
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
                <UnsubscribeLink userId={userId} onDeleteUser={deleteUser} />
              </TextLink>
            </ExtraView>
          </InnerContainer>
        </KeyboardAvoidingView>
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
  // Display and Hide the password when click on the eye icon.
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
