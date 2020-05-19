import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RelayEnv from './env/relay.env';
import {Environment} from 'react-relay';

const Stack = createStackNavigator();

function withEnvironment(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent environment={RelayEnv} />;
    }
  };
}

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={withEnvironment(HomeScreen)}
      />
      <Stack.Screen
        name="About"
        component={withEnvironment(AboutScreen)}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
