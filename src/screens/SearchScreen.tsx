import * as React from 'react';
import {View, Text} from 'react-native';
import {BottomTabIcons} from '../icons';
import Header from './SearchScreenHeader';
const {SearchTabIcon} = BottomTabIcons;

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View>
      <Header {...props} />
      <Text>Search Screen</Text>
    </View>
  );
};
