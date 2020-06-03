import React from 'react';
import {TouchableHighlight, Image, SafeAreaView} from 'react-native';
import AudioPlaylistController from './AudioPlayerPlaylistController';
import {CloseButtonIcon} from './AudioPlayerIcons';

const AudioPlayerHeader = (props: any) => {
  const {navigation} = props;

  const close = () => {
    AudioPlaylistController.pause();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flexDirection: 'row', width: '100%'}}>
      <TouchableHighlight onPress={close}>
        <CloseButtonIcon />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default AudioPlayerHeader;
