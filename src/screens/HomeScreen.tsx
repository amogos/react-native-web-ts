import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Image, Slider, Text} from 'react-native-elements';

import AudioPlayerScreen from '../audio-player/AudioPlayerView';
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
    url: require('../audio-player/assets/test.mp3'),
    artist: 'unknown',
    duration: 70,
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
  return <AudioPlayerScreen playlist={testPlaylist} />;
};

const styles = StyleSheet.create({});
