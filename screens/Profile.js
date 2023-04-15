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
const Profile = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (text) => {
    setname(text);
  };

  const handleUserNameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!username.trim()) {
      alert("Please enter your username");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }
    if (!confirmPassword.trim()) {
      alert("Please enter your confirm password");
      return;
    }

    // perform login logic
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
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
      </View>
      <View style={{ flex: 2, left: "25%" }}>
        <MediumPageLogo
          resizeMode="cover"
          source={require("./../assets/Logo.png")}
          style={{
            top: "3%",
            //position: "absolute",
          }}
        />
      </View>
      <View style={{ flexDirection: "column", height: "20%" }} />
      <ScrollView>
        <InnerContainer>
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
                  onChangeText={handleNameChange}
                  onBlur={handleBlur("name")}
                  values={values.name}
                />

                <MyTextInput
                  placeholder="Username"
                  placeholderTextColor={darkLight}
                  onChangeText={handleUserNameChange}
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
                  onChangeText={handlePasswordChange}
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
                  onChangeText={handleConfirmPasswordChange}
                  onBlur={handleBlur("confirmPassword")}
                  values={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <StyledButton onPress={handleLogin}>
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
export default Profile;
