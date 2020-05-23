import * as React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';

export default ({navigation}: {navigation: any}) => {
  const icon = require('../icons/profile.jpg');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={icon} style={{width: 128, height: 128}} />
    </View>
  );
};
