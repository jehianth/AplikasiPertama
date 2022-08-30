/* eslint-disable prettier/prettier */
// 3 bagian sederhana
// import, main code, export
import React from 'react';
import {View, ScrollView} from 'react-native';
import Flexbox from './Flexbox';
import Position from './Position';
import SampleComponent from './SampleComponent';
import StyleComponent from './StyleComponent';

//satu function hanya bisa mereturn satu component, jadi lebih baik dibungkus pake view
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StyleComponent />
        <Flexbox /> */}
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
