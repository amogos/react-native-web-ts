import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {Button, Image, Slider, Text} from 'react-native-elements';

import AudioPlaylistController from './AudioPlaylistController';
import {AudioPlayableItem} from './AudioPlayer';

export default (props: any) => {
  const {playlist} = props;
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [cover, setCover] = useState('');

  useEffect(() => {
    async function reset() {
      AudioPlaylistController.clearPlaylist();
      await AudioPlaylistController.addToPlaylist(...playlist);
      AudioPlaylistController.addTrackChangeListener(trackChanged);
    }
    reset();
  }, []);

  const trackChanged = (track: AudioPlayableItem | null) => {
    if (track) {
      setDuration(track.duration);
      setPosition(0);
      setCover(track.artwork);
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
    <SafeAreaView>
      <Text>Duration: {duration}</Text>
      <Image
        source={{
          uri: cover,
        }}
        style={styles.cover}
        PlaceholderContent={<ActivityIndicator />}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: 'auto',
    resizeMode: 'stretch',
  },
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
