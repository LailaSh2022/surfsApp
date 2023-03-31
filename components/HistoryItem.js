import React from 'react'
import { View, Text } from 'react-native';

const HistoryItem = (props) => {

    
    const { OrderNo, SentDate, Receiver, Amount, ReceivierGets } = props.item;

    return (


        <View>
            <View style={{ flexDirection: 'row', paddingTop:20}}>
                <Text style={{ width: '75%' }}>
                    {Receiver}
                </Text>
                <Text>{Amount}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: '75%' }}>
                    Sent:{SentDate}, Order No: {OrderNo}
                </Text>
                <Text>{ReceivierGets}  </Text>
            </View>
        </View>
    
    );
};

export default HistoryItem;