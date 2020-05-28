import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import AudioPlaylistController from '../audio-player/AudioPlaylistController';
import {AudioPlayableItem} from '../audio-player/AudioPlayer';

interface Props {
  environment: any;
  navigation: any;
  renderProps: any;
}

const icon = require('../icons/home.jpg');

const testPlaylist: AudioPlayableItem[] = [
  {
    title: 'test title',
    artwork: 'none',
    id: 'id01',
    url: require('../audio-player/assets/track.mp3'),
    artist: 'unknown',
  },
];

export default (props: any) => {
  const {navigation, environment} = props;

  const togglePlay = async () => {
    await AudioPlaylistController.addToPlaylist(...testPlaylist);
    AudioPlaylistController.togglePlay();
  };

  return (
    <View style={styles.container}>
      <Button
        title="play"
        style={{width: 128, height: 128}}
        onPress={togglePlay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
