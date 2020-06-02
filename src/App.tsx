import React from 'react';
import RelayEnvironment from './RelayEnvironment';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {withNavigation} from 'react-navigation';
import {HomeTabIcon, SearchTabIcon, ScanTabIcon, ProfileTabIcon} from './icons';

import {
  HomeScreen,
  SearchScreen,
  ProfileScreen,
  ErrorScreen,
  LoadingScreen,
  QRScreen,
} from './screens';

import AudioPlayerNavigator from './audio-player/AudioPlayerNavigator';

function withEnvironment(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    public render() {
      return (
        <WrappedComponent {...this.props} environment={RelayEnvironment} />
      );
    }
  };
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'home') {
            icon = focused ? <HomeTabIcon /> : <HomeTabIcon />;
          } else if (route.name === 'scan') {
            icon = focused ? <ScanTabIcon /> : <ScanTabIcon />;
          } else if (route.name === 'search') {
            icon = focused ? <SearchTabIcon /> : <SearchTabIcon />;
          } else if (route.name === 'profile') {
            icon = focused ? <ProfileTabIcon /> : <ProfileTabIcon />;
          }
          return icon;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="home"
        component={withEnvironment(withNavigation(HomeScreen))}
      />
      <Tab.Screen
        name="scan"
        component={withEnvironment(withNavigation(QRScreen))}
      />
      <Tab.Screen
        name="search"
        component={withEnvironment(withNavigation(SearchScreen))}
      />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <RootStack.Navigator headerMode="none" mode="modal" initialRouteName="home">
      <RootStack.Screen name="home" component={HomeTabs} />
      <RootStack.Screen name="player" component={AudioPlayerNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);
