import React from 'react';
import {View} from 'react-native';
import {Slider, Text} from 'react-native-elements';
import TrackPlayer from 'react-native-track-player';
import AudioPlaylistController from './AudioPlayerPlaylistController';

interface Props {
  duration: number;
}

class AudioPlayerProgressBar extends TrackPlayer.ProgressComponent<Props, {}> {
  slideTrack = async (position: number) => {
    await AudioPlaylistController.seekTo(position);
  };

  convertHMS = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = Math.floor(sec - hours * 3600 - minutes * 60);
    const sHours = hours < 10 ? `0${hours}` : `${hours}`;
    const sMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${sHours}:${sMinutes}:${sSeconds}`;
  };

  render() {
    return (
      <View>
        <Text>{this.convertHMS(this.state.position)}</Text>
        <Slider
          style={{width: '85%', height: '1%'}}
          maximumValue={this.props.duration}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          value={this.state.position}
          thumbStyle={{
            backgroundColor: 'transparent',
          }}
          onValueChange={value => this.setState({position: value})}
          onSlidingComplete={this.slideTrack}
        />
        <Text>{this.convertHMS(this.props.duration)}</Text>
      </View>
    );
  }
}


export default AudioPlayerProgressBar;