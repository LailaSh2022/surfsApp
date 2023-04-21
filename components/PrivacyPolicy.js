import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const PrivacyPolicy = () => {
  const handlePress = () => {
    Alert.alert(
      'Privacy Policy',
      'This app collects your personal information for the purpose of providing you with a better user experience. By using this app, you consent to the collection and use of your personal information in accordance with our privacy policy.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('User agreed to privacy policy.'),
        },
      ]
    );
  };

  return (
    <Button title="Privacy Policy" onPress={handlePress} />
  );
};

export default PrivacyPolicy;