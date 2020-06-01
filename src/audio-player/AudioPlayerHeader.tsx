import React from 'react';
import {TouchableHighlight, Image, SafeAreaView} from 'react-native';
import AudioPlaylistController from './AudioPlayerPlaylistController';
import {closeButtonImage} from './AudioPlayerIcons';

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
