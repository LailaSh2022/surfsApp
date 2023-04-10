import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {
    StyledBackButton,
    ButtonText,
    StyledContainer,
    StyledButton,
} from "./../components/Styles";


const ReceiverDetails = () => {

    
    
    return (
        <StyledContainer>
            <View style={{ flexDirection: 'row' }}>
                <StyledBackButton>
                    <ButtonText>{'<'}</ButtonText>
                </StyledBackButton>
                <Text style={styles.headline}> Receiver Details</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{width:'25%'} }>
                    Name:
                </Text>
                <Text> tatiane</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }} >
                    Account No: 
                </Text>
                <Text> 001-11111111111111-07</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Address:
                </Text>
                <Text> 10 Martin Road Orakei Auckland {`\n`} New Zealand</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Email:
                </Text>
                <Text> tatian@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text>
                    Bank Info:
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Name: 
                </Text>
                <Text> XYZ Bank New Zealand LTD</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Address:
                </Text>
                <Text> Wiri Station RD, Manukau, Auckland 2104, {'\n'} New Zealand</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Swift Code:
                </Text>
                <Text style={{ paddingBottom:30 }}> XYZ BNZ 23</Text>
            </View>
            <StyledButton>
                <ButtonText >Continue</ButtonText>
            </StyledButton>
        </StyledContainer>
        

    );
};


const styles = StyleSheet.create({

    headline: {
        flex:2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
        color:'#152A5F'
    }
});

export default ReceiverDetails;