import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {withNavigation} from 'react-navigation';
import {Image} from 'react-native-elements';

import RelayEnvironment from './RelayEnvironment';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import ErrorScreen from './screens/ErrorScreen';
import LoadingScreen from './screens/LoadingScreen';


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
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'home') {
            icon = focused
              ? require('./icons/home.jpg')
              : require('./icons/home.jpg');
          } else if (route.name === 'search') {
            icon = focused
              ? require('./icons/search.jpg')
              : require('./icons/search.jpg');
          } else if (route.name === 'profile') {
            icon = focused
              ? require('./icons/profile.jpg')
              : require('./icons/profile.jpg');
          }
          return <Image source={icon} style={{width: 32, height: 32}} />;
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
        name="search"
        component={withEnvironment(withNavigation(SearchScreen))}
      />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer
    linking={{enabled: true, prefixes: ['https://myapp.com', 'myapp://']}}>
    <Home />
  </NavigationContainer>
);
