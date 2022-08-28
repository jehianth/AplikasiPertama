/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

//basic component
const SampleComponent = () => {
    return (
    <View>
        <Text
        style={{margin: 5, fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        1. Sample Component
        </Text>
        <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
        <Text>Jehian</Text>
        <Text>Athaya</Text>
        <Prodi />
        <Photo />
        <TextInput style={{borderWidth: 1, width: 300}} />
        <BoxGreen />
        <Profile />
    </View>
    );
};

const Prodi = () => {
    return <Text>S1 Informatika</Text>;
};

const Photo = () => {
    return (
    <Image
        source={{uri: 'https://placeimg.com/300/100/tech'}}
        style={{width: 300, height: 100}}
    />
    );
};

class BoxGreen extends Component {
    render() {
    return <Text>Ini component class</Text>;
    }
}

class Profile extends Component {
    render() {
    return (
        <View>
        <Image
            source={{uri: 'https://placeimg.com/300/300/people'}}
            style={{width: 300, height: 300, borderRadius: 150}}
        />
        <Text style={{color: 'purple', fontSize: 20}}>Gambar</Text>
        </View>
    );
    }
}

export default SampleComponent;
