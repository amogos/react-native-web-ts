import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForwardButtonIcon = () => <Icon name="forward" size={30} />;
const BackwardButtonIcon = () => <Icon name="backward" size={30} />;
const JumpForwardButtonIcon = () => <Icon name="fast-forward" size={30} />;
const JumpBackwardButtonIcon = () => <Icon name="fast-backward" size={30} />;

const PlayButtonIcon = () => <Icon name="play-circle" size={30} />;
const PauseButtonIcon = () => <Icon name="pause-circle" size={30} />;

const CloseButtonIcon = () => <Icon name="caret-down" size={30} />;

export {
  ForwardButtonIcon,
  BackwardButtonIcon,
  PlayButtonIcon,
  PauseButtonIcon,
  CloseButtonIcon,
};
