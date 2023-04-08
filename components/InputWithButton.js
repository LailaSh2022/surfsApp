import React from "react";
import PropTypes from "prop-types";

import { View, Text, TouchableHighlight, TextInput } from "react-native";
import {
  Container,
  ButtonContainer,
  Border,
  Input,
  SideButtonText,
} from "./Styles";

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  return (
    <Container>
      <ButtonContainer onPress={onPress}>
        <SideButtonText>{buttonText}</SideButtonText>
      </ButtonContainer>
      <Border />
      <Input />
    </Container>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
