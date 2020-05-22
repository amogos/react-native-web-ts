import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {withNavigation} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RelayEnv from './env/relay.env';

const Stack = createStackNavigator();

function withEnvironment(WrappedComponent: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...this.props} environment={RelayEnv} />;
    }
  };
}

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={withEnvironment(withNavigation(HomeScreen))}
      />
      <Stack.Screen name="About" component={withEnvironment(withNavigation(AboutScreen))} />
    </Stack.Navigator>
  </NavigationContainer>
);
