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
import { useRoute, useNavigation } from "@react-navigation/native";
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
  getReceiver,
  updateExistingReceiver,
  deleteUser,
} from "../Database";

import { UpdateUserInfoIntoServer } from "../DataSynchronization";

import NetInfo from "@react-native-community/netinfo";

const { brand, darkLight, tertiary } = Colors;
// Input Validation.
// const EditReceiverForm = ({ navigation, onSubmit, userData }) => {
//   const [hidePassword, setHidePassword] = useState(true);

//   return (

//   );
// };

const EditReceiver = () => {
  const [userData, setUserData] = useState(null);
  const route = useRoute();
  const { userId } = route.params || {};
  const navigation = useNavigation();
  console.log("ProfilePage - userId: " + userId);

  useEffect(() => {
    getReceiver(global.ReceiverId[0]).then((data) => setUserData(data));
  }, [global.ReceiverId[0]]);
  console.log(userData);

  if (!userData) {
    return <ActivityIndicator />;
  }

  const onSubmit = (values) => {
    updateExistingReceiver(values);
    navigation.navigate("ReceiverList", { userId: global.userId[0] });

    // synchronize user data to server if there is any connection
    NetInfo.fetch().then((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected) {
        updateExistingReceiver(values);
        navigation.navigate("ReceiverList", { userId: global.userId[0] });
      }
    });
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <InnerContainer>
            <PageTitle>Edit Receiver</PageTitle>
            <Formik
              initialValues={{
                Id: userData.Id,
                Currency: userData.currency,
                FirstName: userData.FirstName,
                lastname: userData.LastName,
                Email: userData.Email,
                Phone_Number: userData.MobileNumber,
                Relationship: userData.relationship,
                BankAccount: userData.Bank_Account_Number,
                SwiftNum: userData.Swift_Code,
              }}
              onSubmit={onSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    // First Name.
                    placeholder="Currency"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Currency")}
                    onBlur={handleBlur("Currency")}
                    defaultValue={userData.Currency}
                    values={values.Currency}
                  />
                  <MyTextInput
                    // First Name.
                    placeholder="First Name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("FirstName")}
                    onBlur={handleBlur("FirstName")}
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
                    // Email address.
                    placeholder="Email Address"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Email")}
                    onBlur={handleBlur("Email")}
                    values={values.Email}
                    defaultValue={userData.Email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    // Mobile Number.
                    placeholder="Mobile Number"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Phone_Number")}
                    onBlur={handleBlur("Phone_Number")}
                    values={values.Phone_Number}
                    defaultValue={userData.MobileNumber}
                  />
                  <MyTextInput
                    // Password.
                    placeholder="Relationship"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("Relationship")}
                    onBlur={handleBlur("Relationship")}
                    values={values.Relationship}
                    defaultValue={userData.Relationship}
                  />
                  <MyTextInput
                    // Username.
                    placeholder="Bank Account"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("BankAccount")}
                    onBlur={handleBlur("BankAccount")}
                    defaultValue={userData.Bank_Account_Number}
                    values={values.BankAccount}
                  />
                  <MyTextInput
                    // Username.
                    placeholder="Swift Num"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("SwiftNum")}
                    onBlur={handleBlur("SwiftNum")}
                    defaultValue={userData.Swift_Code}
                    values={values.SwiftNum}
                  />

                  <StyledButton onPress={() => onSubmit()}>
                    <ButtonText>Update</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </KeyboardAvoidingView>
      </ScrollView>
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
export default EditReceiver;
