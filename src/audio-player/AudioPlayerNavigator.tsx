import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioPlayerScreen from './AudioPlayerScreen';

const Tab = createBottomTabNavigator();

const AudioPlayerSpeedScreen = () => {
  return <View />;
};
const AudioPlayerChaptersScreen = () => {
  return <View />;
};

const AudioPlayerClipsScreen = () => {
  return <View />;
};

export default (props: any) => {
  return (
    <Tab.Navigator initialRouteName="player">
      <Tab.Screen
        name="player"
        component={() => {
          return <AudioPlayerScreen {...props} />;
        }}
      />
      <Tab.Screen name="speed" component={AudioPlayerSpeedScreen} />
      <Tab.Screen name="chapters" component={AudioPlayerChaptersScreen} />
      <Tab.Screen name="clips" component={AudioPlayerClipsScreen} />
    </Tab.Navigator>
  );
};
