import React from 'react';
import {SafeAreaView} from 'react-native';
import {Slider, Text} from 'react-native-elements';
import TrackPlayer from 'react-native-track-player';
import audioPlayerPlaylistController from './AudioPlayerPlaylistController';

interface Props {
  duration: number;
}

interface State {
  isSeeking: boolean;
  seek: number;
}

class AudioPlayerProgressBar extends TrackPlayer.ProgressComponent<
  Props,
  State
> {
  convertHMS = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = Math.floor(sec - hours * 3600 - minutes * 60);
    const sHours = hours < 10 ? `0${hours}` : `${hours}`;
    const sMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if (hours === 0) {
      return `${sMinutes}:${sSeconds}`;
    }
    return `${sHours}:${sMinutes}:${sSeconds}`;
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{marginRight: 10}}>
          {this.convertHMS(this.state.position)}
        </Text>
        <Slider
          style={{width: 120, height: 2}}
          maximumValue={this.props.duration}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          value={this.state.position}
          thumbStyle={{
            backgroundColor: 'transparent',
          }}
          onValueChange={value => {
            this.setState({isSeeking: true, seek: value});
          }}
          onSlidingComplete={value => {
            audioPlayerPlaylistController.seekTo(this.state.seek);
            this.setState({isSeeking: false});
          }}
        />
        <Text style={{marginLeft: 10}}>
          {this.convertHMS(this.props.duration)}
        </Text>
      </SafeAreaView>
    );
  }
}

export default AudioPlayerProgressBar;
