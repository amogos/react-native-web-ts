import * as React from 'react';
import {SafeAreaView, View, Text, TouchableHighlight} from 'react-native';
import {Divider} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioPlayerScreen from './AudioPlayerScreen';
import AudioPlayerHeader from './AudioPlayerHeader';
import AudioPlayerPLaylistController from './AudioPlayerPlaylistController';

const AudioPlayerSpeedScreen = (props: any) => {
  let SpeedItem = ({speed}: {speed: any}) => {
    return (
      <SafeAreaView>
        <TouchableHighlight
          onPress={() => AudioPlayerPLaylistController.onSpeedChanged(speed)}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>{speed}</Text>
        </TouchableHighlight>
        <Divider />
      </SafeAreaView>
    );
  };

  const speeds = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5];

  return (
    <SafeAreaView>
      <AudioPlayerHeader {...props} />
      <SafeAreaView style={{marginTop: 20}}>
        <Divider />
        {speeds.map((speed, index) => (
          <SpeedItem key={index} speed={speed} />
        ))}
        <Divider />
      </SafeAreaView>
    </SafeAreaView>
  );
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
