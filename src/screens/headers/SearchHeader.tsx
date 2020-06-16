import * as React from 'react';
import {Header} from 'react-native-elements';
import {TopIcons} from '../../icons';
import {View, TouchableHighlight} from 'react-native';
const {BackArrowIcon} = TopIcons;

interface Props {
  navigation: any;
}

export default (props: Props) => {
  const {navigation} = props;

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
        containerStyle={{
          height: 64,
          backgroundColor: '#FFFFFF'
        }}
      />
    </View>
  );
};
