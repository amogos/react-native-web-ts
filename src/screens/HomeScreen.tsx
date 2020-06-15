import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from 'react-native-elements';
import SearchScreen from './SearchScreen';
import {withProps} from '../hoc';
import {SearchTabIcon} from '../icons';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

const Stack = createStackNavigator();

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
        centerComponent={{text: 'MY TITLE', style: {marginTop: 5}}}
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

const HomeStack = (props: Props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={withProps(HomeScreen, props)} />
      <Stack.Screen name="search" component={withProps(SearchScreen, props)} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
