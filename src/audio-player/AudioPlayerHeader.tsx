import React from 'react';
import {
  TouchableHighlight,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Text} from 'react-native-elements';
import AudioPlaylistController from './AudioPlayerPlaylistController';

const closeButtonImage = require('./assets/close.jpg');

export interface AudioPlayerHeaderOptions {
  title: string;
}

const AudioPlayerHeader = (props: any) => {
  const {navigation} = props;

  const close = () => {
    AudioPlaylistController.pause();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flexDirection: 'row', width: '100%'}}>
      <TouchableHighlight onPress={close}>
        <Image source={closeButtonImage} style={{width: 30, height: 30}} />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default AudioPlayerHeader;
