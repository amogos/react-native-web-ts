import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from 'react-native';
import {Slider, Text, Button} from 'react-native-elements';

import AudioPlaylistController from './AudioPlayerPlaylistController';
import {AudioPlayableTrack, AudioPlayableAlbum} from './AudioPlayer';
import AudioPlayerHeader from './AudioPlayerHeader';
import {
  forwardButtonImage,
  backwardButtonImage,
  playButtonImage,
  pauseButtonImage,
} from './AudioPlayerIcons';

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

  const togglePlay = async () => {
    await AudioPlaylistController.togglePlay();
    setIsPlaying(!isPlaying);
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
        <TouchableHighlight onPress={playPreviousTrack}>
          <Image source={backwardButtonImage} style={{width: 50, height: 50}} />
        </TouchableHighlight>
        <TouchableHighlight onPress={togglePlay}>
          <Image
            source={isPlaying ? pauseButtonImage : playButtonImage}
            style={{width: 50, height: 50}}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={playNextTrack}>
          <Image source={forwardButtonImage} style={{width: 50, height: 50}} />
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

  thumbstyle: {
    backgroundColor: 'transparent',
  },
});
