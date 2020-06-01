import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioPlayerScreen from './AudioPlayerScreen';
import AudioPlayerHeader from './AudioPlayerHeader';

const AudioPlayerSpeedScreen = (props: any) => {
  return <AudioPlayerHeader {...props}  />;
};

const AudioPlayerChaptersScreen = (props: any) => {
  return <AudioPlayerHeader {...props} />;
};

const AudioPlayerClipsScreen = (props: any) => {
  return <AudioPlayerHeader {...props} />;
};

function withProps(WrappedComponent: any, props: any) {
  return class extends React.Component<any, any> {
    public render() {
      return <WrappedComponent {...props} />;
    }
  };
}

const Tab = createBottomTabNavigator();

export default (props: any) => {
  return (
    <Tab.Navigator initialRouteName="player">
      <Tab.Screen
        name="player"
        component={withProps(AudioPlayerScreen, props)}
      />
      <Tab.Screen
        name="speed"
        component={withProps(AudioPlayerSpeedScreen, props)}
      />
      <Tab.Screen
        name="chapters"
        component={withProps(AudioPlayerChaptersScreen, props)}
      />
      <Tab.Screen
        name="clips"
        component={withProps(AudioPlayerClipsScreen, props)}
      />
    </Tab.Navigator>
  );
};
