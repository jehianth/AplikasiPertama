/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import msi from './msi.png';

//styling di component
const StyleComponent = () => {
  return (
    <View>
      <Text style={styles.text}>2. Style Component</Text>
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
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Plus Jakarta Sans',
    color: 'black',
  },
});

export default StyleComponent;
