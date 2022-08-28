// 3 bagian sederhana
// import, main code, export
import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StyleComponent from './StyleComponent';

//satu function hanya bisa mereturn satu component, jadi lebih baik dibungkus pake view
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StyleComponent />
      </ScrollView>
    </View>
  );
};

export default App;
