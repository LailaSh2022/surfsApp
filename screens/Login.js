import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
//Using formik
import { Formik } from "formik";
//Icons
import { Octicons } from "@expo/vector-icons";
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
} from "./../components/Styles";

const { brand, darkLight, tertiary } = Colors;
const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require("./../assets/Logo.png")} />
        <PageTitle>Login</PageTitle>

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                //lable="Username"
                icon="person-fill"
                placeholder="Username"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                values={values.username}
                keyboardType="email-address"
              />
            </StyledFormArea>
          )}
        </Formik>
        <SubTitle>Not Rigiater Yet? Sign Up</SubTitle>
      </InnerContainer>
    </StyledContainer>
  );
};
const MyTextInput = ({ lable, icon, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={darkLight} />
      </LeftIcon>
      <StyledInputLable>{lable}</StyledInputLable>
      <StyledTextInput {...props} />
    </View>
  );
};
export default Login;
