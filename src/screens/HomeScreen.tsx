import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {AudioPlayableItem} from '../audio-player/AudioPlayer';
import AudioPlayerNavigator from '../audio-player/AudioPlayerNavigator';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

const testPlaylist: AudioPlayableItem[] = [
  {
    title: 'I Love English',
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id02',
    url: require('../audio-player/assets/test.mp3'),
    artist: 'unknown',
    duration: 70,
  },
  {
    title: 'I Love English',
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id01',
    url: require('../audio-player/assets/08AbenteuerUmMitternacht.mp3'),
    artist: 'unknown',
    duration: 206,
  },
  {
    title: 'I Love English',
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id03',
    url: require('../audio-player/assets/sample-music.mp3'),
    artist: 'unknown',
    duration: 61,
  },
];

function Home({navigation}: {navigation: any}) {
  return (
    <View>
      <Button
        title="player"
        onPress={() => navigation.navigate('audio-player', {playlist:testPlaylist})}
        type="clear"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default (props: any) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="audio-player" component={AudioPlayerNavigator} />
    </Stack.Navigator>
  );
};
