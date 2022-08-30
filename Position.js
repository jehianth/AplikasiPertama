/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import { Icon } from '@iconify/react';
// import shoppingCart from '@iconify/icons-fa-solid/shopping-cart';
import cart from './cart.png';

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                {/* <Icon icon={shoppingCart} /> */}
                <Image source={cart} style={styles.iconCart} />
                <Text style={styles.notif}>25</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    );
};

export default Position;

const styles = StyleSheet.create({
    wrapper: {padding: 20, alignItems: 'center'},
    cartWrapper: {backgroundColor: '#f3f3f3', width: 93, height: 93, borderRadius: 93 / 2, justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 20},
    iconCart: {width: 50, height: 75},
    text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#ef144a',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 5,
        right: 0,
    },
});
