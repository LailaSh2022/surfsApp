import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    StyledContainer,
} from "./../components/Styles";


const OrderSummary = () => {

    return (
        <StyledContainer>
            <View style={{ flexDirection: 'row' }}>
                <StyledBackButton>
                    <ButtonText>{'<'}</ButtonText>
                </StyledBackButton>
                <Text style={styles.headline}> Order Summary</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Text style={{ width: '25%' }}>
                    Order No:
                </Text>
                <Text> 123</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }} >
                    Date:
                </Text>
                <Text> 13/02/2023</Text>
            </View>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Rate:
                </Text>
                <Text style={{ fontSize: 20, marginTop:-5 }}> 1.00NZD = 0.5912 USD</Text>
            </View>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text>
                    Transfer:
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Amount:
                </Text>
                <Text style={{ fontSize: 20, marginTop: -5 }}> 350NZD</Text>
            </View>
            
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Fee (1%):
                </Text>
                <Text style={{ fontSize: 20, marginTop: -5 }}> 3.50NZD</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '25%' }}>
                    Total:
                </Text>
                <Text style={{ fontSize: 20, marginTop: -5 } }>353.50NZD</Text>
            </View>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Text style={{ width: '40%' }}>
                    Total Receiver gets:
                </Text>
                <Text style={{ paddingBottom: 30, fontSize: 20, marginTop:-5 }}> 208.99 USD</Text>
            </View>
            <StyledButton>
                <ButtonText >Continue</ButtonText>
            </StyledButton>
        </StyledContainer>


    );
};


const styles = StyleSheet.create({

    headline: {
        flex: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 10,
        color: '#152A5F'
    },

    line: {
        paddingTop:10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default OrderSummary;