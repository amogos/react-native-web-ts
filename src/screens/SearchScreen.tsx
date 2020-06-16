import * as React from 'react';
import {View, Text} from 'react-native';
import {BottomTabIcons} from '../icons';
import SearchHeader from './headers/SearchHeader';
const {SearchTabIcon} = BottomTabIcons;

interface Props {
  navigation: any;
}

export default (props: Props) => {
  return (
    <View>
      <SearchHeader {...props} />
      <Text>Search Screen</Text>
    </View>
  );
};
