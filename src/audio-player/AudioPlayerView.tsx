import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
import {Button, Slider, Text} from 'react-native-elements';

import AudioPlaylistController from './AudioPlaylistController';
import {AudioPlayableItem} from './AudioPlayer';

export default (props: any) => {
  const {playlist} = props;
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [cover, setCover] = useState(
    'https://vo2max.de/wp-content/uploads/2018/04/no-image.jpg',
  );
  const [title, setTitle] = useState('');

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
      setTitle(track.title);
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

  const AudioControls = () => {
    return (
      <View style={styles.controls}>
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

  const Header = () => {
    return <Text style={styles.title}>{title}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Image
        style={{
          width: '85%',
          height: '50%',
          marginTop: '3%',
          marginBottom: '5%',
        }}
        source={{
          uri: cover,
        }}
      />
      <Slider
        style={{width: '85%', height: '1%'}}
        maximumValue={duration}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        value={position}
        thumbStyle={styles.thumbstyle}
        onValueChange={value => setPosition(value)}
        onSlidingComplete={slideTrack}
      />
      <AudioControls />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  controls: {
    marginTop: '5%',
  },

  thumbstyle: {
    backgroundColor: '#000000',
    width: 0,
  },

  title: {
    textAlign: 'center',
  },
});
