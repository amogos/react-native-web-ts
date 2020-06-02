import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

//  player buttons
const ForwardButtonIcon = () => <Icon name="forward" size={20} />;
const BackwardButtonIcon = () => <Icon name="backward" size={20} />;
const JumpForwardButtonIcon = () => <Icon name="rotate-right" size={20} />;
const JumpBackwardButtonIcon = () => <Icon name="rotate-left" size={20} />;
const PlayButtonIcon = () => <Icon name="play-circle" size={20} />;
const PauseButtonIcon = () => <Icon name="pause-circle" size={20} />;
const CloseButtonIcon = () => <Icon name="chevron-down" size={20} />;

//  navigation tabs
const QRCodeTabIcon = () => <Icon name="qrcode" size={20} />;

export {
  //  player buttons
  ForwardButtonIcon,
  BackwardButtonIcon,
  PlayButtonIcon,
  PauseButtonIcon,
  CloseButtonIcon,
  JumpForwardButtonIcon,
  JumpBackwardButtonIcon,
  //  navigation tabs
};
