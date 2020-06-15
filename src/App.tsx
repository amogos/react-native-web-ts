import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {withNavigation} from 'react-navigation';

import RelayEnvironment from './RelayEnvironment';
import {GetLocalizedStrings} from './localization';

import {
  HomeScreen,
  SearchScreen,
  ProfileScreen,
  ErrorScreen,
  LoadingScreen,
} from './screens';

import {
  HomeTabIcon,
  ProfileTabIcon,
  SearchTabIcon,
  UndefinedIcon,
} from './icons';

function withEnvironment(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    public render() {
      return (
        <WrappedComponent {...this.props} environment={RelayEnvironment} />
      );
    }
  };
}

const Stack = createStackNavigator();

function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={ErrorScreen} />
      <Stack.Screen name="Notifications" component={LoadingScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Home() {
  const translations = GetLocalizedStrings();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'home') {
            return focused ? <HomeTabIcon /> : <HomeTabIcon />;
          } else if (route.name === 'search') {
            return focused ? <SearchTabIcon /> : <SearchTabIcon />;
          } else if (route.name === 'profile') {
            return focused ? <ProfileTabIcon /> : <ProfileTabIcon />;
          }
          return <UndefinedIcon />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name={translations.id_home}
        component={withEnvironment(withNavigation(HomeScreen))}
      />
      <Tab.Screen
        name={translations.id_search}
        component={withEnvironment(withNavigation(SearchScreen))}
      />
      <Tab.Screen name={translations.id_profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <Home />
  </NavigationContainer>
);
