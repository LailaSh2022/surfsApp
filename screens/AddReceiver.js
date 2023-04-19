import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons } from "@expo/vector-icons";
import PageFooter from "../components/PageFooter";
// Styles
import {
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledTextInput,
  StyledInputLable,
  LeftIcon,
  StyledButton,
  ButtonText,
  Colors,
  ExtraView,
  ExtraText,
} from "./../components/Styles";

import { AddNewReceiver } from "../Database";

const { darkLight } = Colors;
const AddReceiver = () => {
  return (
    <StyledContainer>
      <ScrollView>
        <StatusBar style="dark" />
        <ExtraView>
          <ExtraText>Enter theis Account details </ExtraText>
        </ExtraView>
        <InnerContainer>
          <Formik
            initialValues={{
              currency: "",
              firstname: "",
              lastname: "",
              email: "",
              MobileNum: "",
              relationship: "",
              bankAccount: "",
              SwiftNum: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              AddNewReceiver(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  placeholder="currency"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("currency")}
                  onBlur={handleBlur("currency")}
                  values={values.currency}
                  //keyboardType="currency"
                />
                <MyTextInput
                  placeholder="FirstName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("firstname")}
                  onBlur={handleBlur("firstname")}
                  values={values.firstname}
                />

                <MyTextInput
                  placeholder="LastName"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  values={values.lastname}
                />

                <MyTextInput
                  placeholder="Their Email Address"
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
                />
                <MyTextInput
                  placeholder="relationship"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("relationship")}
                  onBlur={handleBlur("relationship")}
                  values={values.relationship}
                  //keyboardType="relantioship"
                />
                <MyTextInput
                  placeholder="Bank Account Details"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("bankAccount")}
                  onBlur={handleBlur("bankAccount")}
                  values={values.bankAccount}
                />
                <MyTextInput
                  placeholder="SWIFT Number"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("SwiftNum")}
                  onBlur={handleBlur("SwiftNum")}
                  values={values.SwiftNum}
                />

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Confirm</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
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
export default AddReceiver;
