import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
// Using formik to create a form in the screen
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons } from "@expo/vector-icons";
import PageFooter from "../components/PageFooter";
import SignUpLink from "../components/SignUpLink";
import HomePage from "./HomePage";
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
import { checkUsernamePassword } from "../Database"; // Call checkUsernamePassword funciton from Database.js
import { useNavigation } from "@react-navigation/native";
import { getUserInfoFromServer } from "../DataSynchronization";
import NetInfo from "@react-native-community/netinfo";

const { brand, darkLight, tertiary } = Colors;
const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  // Validation part.
  const handleUserNameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter your username");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }

    // perform login logic
    checkUsernamePassword(username, password) // Use checkUsernamePassword funciton from Database.js
      // If username and password exsits return the user id.
      .then((userId) => {
        if (userId) {
          //alert("Login Successful! " + userId);
          /*
          //synchronization data with server if there is any connection
          NetInfo.fetch().then((state) => {
            if (state.isConnected) {
              getUserInfoFromServer(userId)
                .then((userData) => {
                  updateExistingUser(userData);
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          });
          */

          navigation.navigate("HomePage", { userId: userId });
        } else {
          alert("Invalid username or password!");
        }
      })
      .catch((error) => {
        console.log(`Error while checking user's credentials: ${error}`);
        console.log(error);
      });
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <ScrollView>
        <KeyboardAvoidingView
          behavior="position"
          style={{ backgroundColor: "white", flex: 1 }}
        >
          <InnerContainer>
            <PageLogo
              resizeMode="cover"
              source={require("./../assets/Logo.png")}
            />
            <PageTitle>Sign In</PageTitle>

            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <StyledFormArea>
                  <MyTextInput
                    // Username input text
                    icon="person-fill"
                    placeholder="Username"
                    placeholderTextColor={darkLight}
                    onChangeText={handleUserNameChange}
                    onBlur={handleBlur("username")}
                    values={values.username}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    // Password input text
                    icon="lock"
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
                  <StyledButton onPress={handleLogin} disabled={!isValid}>
                    <ButtonText>Sign In</ButtonText>
                  </StyledButton>
                </StyledFormArea>
              )}
            </Formik>
            <ExtraView>
              <ExtraText>Not Register Yet? </ExtraText>
              <TextLink>
                <SignUpLink />
              </TextLink>
            </ExtraView>
          </InnerContainer>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={{ flexDirection: "column", height: "18%" }} />
      {/* <View>
        <PageFooter />
      </View> */}
    </StyledContainer>
  );
};
// Hide and display the password by ckicking on the eye icon
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
export default Login;
