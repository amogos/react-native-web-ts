import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioPlayerScreen from './AudioPlayerScreen';

const Tab = createBottomTabNavigator();

const AudioPlayerSpeedScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Speed Screen</Text>
    </View>
  );
};
const AudioPlayerChaptersScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chapters Screen</Text>
    </View>
  );
};

const AudioPlayerClipsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Clips Screen</Text>
    </View>
  );
};

function withProps(WrappedComponent: any, props: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...props} />;
    }
  };
}

export default (props: any) => {
  return (
    <Tab.Navigator initialRouteName="player">
      <Tab.Screen
        name="player"
        component={withProps(AudioPlayerScreen, props)}
      />
      <Tab.Screen name="speed" component={AudioPlayerSpeedScreen} />
      <Tab.Screen name="chapters" component={AudioPlayerChaptersScreen} />
      <Tab.Screen name="clips" component={AudioPlayerClipsScreen} />
    </Tab.Navigator>
  );
};
