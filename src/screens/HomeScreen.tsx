import React, {useState} from 'react';
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
    id: 'id01',
    url: require('../audio-player/assets/sample-music.mp3'),
    artist: 'unknown',
  },
];

export default (props: any) => {
  const {navigation, environment} = props;
  const [value, setValue] = useState(0);

  const togglePlay = async () => {
    await AudioPlaylistController.addToPlaylist(...testPlaylist);
    AudioPlaylistController.togglePlay();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://www.sailer-verlag.de/wp-content/uploads/2019/09/I-Love-English-Junior-Kinderzeitschrift-kategorie.jpg',
        }}
        style={{width: 200, height: 200}}
      />
      <Slider
        style={styles.slider}
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        value={50}
        thumbStyle={styles.thumbstyle}
        onValueChange={sliderValue => setValue(sliderValue)}
      />
      <Text>Value: {value}</Text>
      <Button
        title="play"
        onPress={togglePlay}
        style={{width: 200, height: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumbstyle: {
    backgroundColor:'#000000',
    height:10
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
