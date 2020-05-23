import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {withNavigation} from 'react-navigation';
import {Image} from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RelayEnv from './env/relay.env';

const Tab = createBottomTabNavigator();

function withEnvironment(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...this.props} environment={RelayEnv} />;
    }
  };
}

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./icons/home.jpg')
              : require('./icons/home.jpg');
          } else if (route.name === 'About') {
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
        name="Home"
        component={withEnvironment(withNavigation(HomeScreen))}
      />
      <Tab.Screen
        name="About"
        component={withEnvironment(withNavigation(AboutScreen))}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
