import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
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

const { brand, darkLight, tertiary } = Colors;
const AddReceiver = () => {
  const [hidePassword, setHidePassword] = useState(true);
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
              email: "",
              name: "",
              MobileNum: "",       
              relantioship: "",
              bankAccount: "",
              
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  
                  lable="Currency"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("currency")}
                  onBlur={handleBlur("currency")}
                  values={values.currency}
                  keyboardType="currency"
                />
                <MyTextInput
                  lable="Their Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  values={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  lable="Full Name of the Account Holder"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  values={values.name}
                />     
                <MyTextInput
                  lable="Mobile Number"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("MobileNum")}
                  onBlur={handleBlur("MobileNum")}
                  values={values.MobileNum}
                  keyboardType="email-address"
                />
                <MyTextInput
                  lable="Relantionship"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("relantioship")}
                  onBlur={handleBlur("relantioship")}
                  values={values.relantioship}
                  keyboardType="relantioship"
                  
                />
                <MyTextInput
                  lable="Bank Account Details"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("bankaccount")}
                  onBlur={handleBlur("bankaccount")}
                  values={values.bankAccount}
                  
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