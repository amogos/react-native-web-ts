import * as React from 'react';
import {View, Text} from 'react-native';

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Missing Screen</Text>
    </View>
  );
};