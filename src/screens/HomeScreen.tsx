import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Image, Slider, Text} from 'react-native-elements';

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
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id02',
    url: require('../audio-player/assets/sample-music.mp3'),
    artist: 'unknown',
    duration: 61,
  },
  {
    title: 'test title',
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id01',
    url: require('../audio-player/assets/08AbenteuerUmMitternacht.mp3'),
    artist: 'unknown',
    duration: 206,
  },
  {
    title: 'test title',
    artwork:
      'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
    id: 'id03',
    url: require('../audio-player/assets/10TomGehtUnterDiePiraten.mp3'),
    artist: 'unknown',
    duration: 435,
  },
];

export default (props: any) => {
  const {navigation, environment} = props;
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    async function reset() {
      AudioPlaylistController.clearPlaylist();
      await AudioPlaylistController.addToPlaylist(...testPlaylist);
      AudioPlaylistController.addTrackChangeListener(trackChanged);
    }
    reset();
  }, []);

  const trackChanged = (track: AudioPlayableItem | null) => {
    if (track) {
      setDuration(track.duration);
      setPosition(0);
    }
  };

  const togglePlay = async () => {
    await AudioPlaylistController.togglePlay();
  };

  const slideTrack = async (position: number) => {
    await AudioPlaylistController.seekTo(position);
  };

  const playPreviousTrack = async () => {
    await AudioPlaylistController.previous();
  };

  const playNextTrack = async () => {
    await AudioPlaylistController.next();
  };

  return (
    <View style={styles.container}>
      <Text>Duration: {duration}</Text>
      <Image
        source={{
          uri:
            'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
        }}
        style={{width: 200, height: 200}}
      />
      <Slider
        style={styles.slider}
        maximumValue={duration}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        value={position}
        thumbStyle={styles.thumbstyle}
        onValueChange={value => setPosition(value)}
        onSlidingComplete={slideTrack}
      />
      <Text>Value: {position}</Text>
      <Button
        title="<<"
        onPress={playPreviousTrack}
        style={{width: 200, height: 10}}
      />
      <Button
        title="play"
        onPress={togglePlay}
        style={{width: 200, height: 10}}
      />
      <Button
        title=">>"
        onPress={playNextTrack}
        style={{width: 200, height: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbstyle: {
    backgroundColor: '#000000',
    height: 10,
  },
  slider: {
    backgroundColor: '#ecf0f1',
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf0f1',
  },
});
