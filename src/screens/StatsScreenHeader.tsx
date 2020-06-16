import * as React from 'react';
import {Header, Text} from 'react-native-elements';
import {TopIcons} from '../icons';
import {View, TouchableHighlight} from 'react-native';
import {GetLocalizedStrings} from './../localization';

const {BackArrowIcon} = TopIcons;

interface Props {
  navigation: any;
}

export default (props: Props) => {
  const {navigation} = props;
  const title = GetLocalizedStrings().id_screen_stats_title;

  const BackButton = () => {
    return (
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <Header
        leftComponent={<BackButton />}
        rightComponent={<Text>{title}</Text>}
        containerStyle={{
          height: 64,
          backgroundColor: '#FFFFFF',
        }}
      />
    </View>
  );
};
