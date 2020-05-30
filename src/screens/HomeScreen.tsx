import React from 'react';


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


export default (props: any) => {
  return <AudioPlayerScreen playlist = {testPlaylist} />;
};
