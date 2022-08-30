/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

//basic component
const Flexbox = () => {
    return (
    <View>
        <View style={{flexDirection: 'row', backgroundColor: 'blue', alignItems: 'flex-end', marginTop:20}}>
            {/* <Text>Materi Flexbox cuy</Text> */}
            <View style={{backgroundColor: '#ee5253', flex: 1, height: 50}} />
            <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
            <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 100}} />
            <View style={{backgroundColor: '#5f27cd', flex: 1, height: 100}} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
            <Image source={{uri: 'https://yt3.ggpht.com/mWABMjldLkzvFW-Ra0vN-0YmWSl1brgNndN--U346LB8AIcQcHiUzj10WztJllkG3p8UKbQMk8I=s176-c-k-c0x00ffffff-no-rj'}}
                style={{width: 90, height: 90, borderRadius:45}}
            />
            <View style={{ marginLeft: 14 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Jehian Athaya
                </Text>
                <Text>100M subscribers</Text>
            </View>
        </View>
    </View>
    );
};

export default Flexbox;
