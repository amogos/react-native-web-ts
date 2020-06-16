import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Header} from 'react-native-elements';
import {GetLocalizedStrings} from './../localization/index';
import {BottomTabIcons} from '../icons';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

const {SearchTabIcon} = BottomTabIcons;

const HomeScreen = (props: Props) => {
  const {navigation, environment} = props;

  const SearchButton = () => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('search')}>
        <SearchTabIcon />
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <Header
        centerComponent={{
          text: `${GetLocalizedStrings().id_app}`,
          style: {marginTop: 5},
        }}
        rightComponent={<SearchButton />}
        containerStyle={{
          backgroundColor: '#D3D3D3',
          height: 64,
        }}
      />
      <Text>Home Screen </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
