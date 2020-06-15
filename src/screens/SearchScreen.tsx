import * as React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements';
import {SearchTabIcon} from '../icons'

export default ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SearchTabIcon/>
    </View>
  );
};
