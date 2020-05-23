import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

interface Props {
  error: any;
  navigation: any;
}

export default (props: Props) => {
  const {error, navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Error Screen</Text>
    </View>
  );
};
