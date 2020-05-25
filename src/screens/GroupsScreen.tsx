import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Groups Screen</Text>
    </View>
  );
};
