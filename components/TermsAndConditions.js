import React from 'react';
import { View, Button, Alert } from 'react-native';

const TermsAndConditions = () => {
  const handlePress = () => {
    Alert.alert(
      'Terms and Conditions',
      'By using this app, you agree to our terms and conditions.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Agree',
          onPress: () => console.log('User agreed to terms and conditions.'),
        },
      ]
    );
  };

  return (
    <View>
      <Button title="Terms and Conditions" onPress={handlePress} />
    </View>
  );
};

export default TermsAndConditions;