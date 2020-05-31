import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioPlayerScreen from './AudioPlayerScreen';
import AudioPlayerHeader from './AudioPlayerHeader';

const AudioPlayerSpeedScreen = (props: any) => {
  const options = {
    title: 'Speed',
  };
  return <AudioPlayerHeader {...props} options={options} />;
};

const AudioPlayerChaptersScreen = (props: any) => {
  const options = {
    title: 'Chapters',
  };
  return <AudioPlayerHeader {...props} options={options} />;
};

const AudioPlayerClipsScreen = (props: any) => {
  const options = {
    title: 'Clips',
  };
  return <AudioPlayerHeader {...props} options={options} />;
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
