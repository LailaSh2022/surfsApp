import react from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UnsubscribeLogo,
  StyledContainer,
  PageTitle,
  InnerContainer,
  ExtraText,
  TextLink,
} from "../components/Styles";

const Unsubscribe = () => {
  const navigation = useNavigation(); // initialize the navigation object

  const handleNavigateToHome = () => {
    navigation.navigate("HomePage"); // navigate to the HomePage component
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Unsubscribe</PageTitle>
        <UnsubscribeLogo
          resizeMode="cover"
          source={require("./../assets/Unsubscribe.png")}
        />
        <View style={{ flexDirection: "row", height: "11%" }}>
          <ExtraText style={{  fontSize: 16 }}>Go back to</ExtraText>
          <TouchableOpacity onPress={handleNavigateToHome}>
            <Text style={{ color: "blue", fontSize: 16 }}> Home Page</Text>
          </TouchableOpacity>
        </View>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Unsubscribe;
