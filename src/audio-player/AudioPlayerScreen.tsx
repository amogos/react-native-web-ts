import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import {Text} from 'react-native-elements';

import AudioPlaylistController from './AudioPlayerPlaylistController';
import {AudioPlayableTrack, AudioPlayableAlbum} from './AudioPlayer';
import AudioPlayerHeader from './AudioPlayerHeader';
import {
  BackwardButtonIcon,
  ForwardButtonIcon,
  PlayButtonIcon,
  PauseButtonIcon,
  JumpBackwardButtonIcon,
  JumpForwardButtonIcon,
} from './AudioPlayerIcons';

import AudioPlayerProgressBar from './AudioPlayerProgressBar';

interface Props {
  route: any;
  navigation: any;
  album: AudioPlayableAlbum;
}

export default (props: Props) => {
  const {route, navigation} = props;
  const {album} = route.params;

  if (!album) {
    return <Text>ERROR: No valid album provided.</Text>;
  }

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [cover, setCover] = useState(
    'https://vo2max.de/wp-content/uploads/2018/04/no-image.jpg',
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const [title, setTitle] = useState('');

  useEffect(() => {
    async function reset() {
      AudioPlaylistController.clearPlaylist();
      await AudioPlaylistController.addToPlaylist(...album.tracks);
      AudioPlaylistController.addTrackChangeListener(trackChanged);
    }
    reset();
  }, []);

  const trackChanged = (track: AudioPlayableTrack | null) => {
    if (track) {
      setDuration(track.duration);
      setPosition(0);
      setCover(track.artwork);
      setTitle(track.title);
    }
  };

  const jumpBackward = async () => {};

  const jumpForward = async () => {};

  const togglePlay = async () => {
    await AudioPlaylistController.togglePlay();
    setIsPlaying(!isPlaying);
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
        <TouchableHighlight onPress={jumpBackward}>
          <JumpBackwardButtonIcon />
        </TouchableHighlight>
        <TouchableHighlight onPress={playPreviousTrack}>
          <BackwardButtonIcon />
        </TouchableHighlight>
        <TouchableHighlight onPress={togglePlay}>
          {isPlaying ? <PauseButtonIcon /> : <PlayButtonIcon />}
        </TouchableHighlight>
        <TouchableHighlight onPress={playNextTrack}>
          <ForwardButtonIcon />
        </TouchableHighlight>
        <TouchableHighlight onPress={jumpForward}>
          <JumpForwardButtonIcon />
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f0ffff'}}>
      <AudioPlayerHeader {...props} />
      <View style={styles.container}>
        <Text style={{marginBottom: 25}}>{title}</Text>
        <Image
          style={{
            width: 160,
            height: 160,
            marginBottom: '5%',
          }}
          source={{
            uri: cover,
          }}
        />
        <AudioPlayerProgressBar duration={duration} />
        <AudioControls />
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
