/* eslint-disable react-native/no-inline-styles */
// 3 bagian sederhana
// import, main code, export
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import msi from './msi.png';

//satu function hanya bisa mereturn satu component, jadi lebih baik dibungkus pake view
const App = () => {
  return <StyleComponent />;
};

//styling di component
const StyleComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Style Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 40,
        }}
      />
      <View
        style={{
          width: 212,
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#F2F2F2',
        }}>
        <Image
          source={msi}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 16,
          }}>
          Jual MSI GF63 10UC-687ID - Gaming Laptop
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 11.399.999
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: '#5c5c5c',
            marginTop: 12,
          }}>
          Purwokerto Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Plus Jakarta Sans',
    color: 'black',
  },
});

//basic component
const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text style={styles.teks}>Jehian</Text>
      <Text style={styles.teks}>Athaya</Text>
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

export default App;
