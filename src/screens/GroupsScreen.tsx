import * as React from 'react';
import {View, Text} from 'react-native';
import Header from './GroupsScreenHeader';

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View>
      <Header {...props} />
      <Text>Groups Screen</Text>
    </View>
  );
};
