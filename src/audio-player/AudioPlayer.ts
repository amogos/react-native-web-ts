import TrackPlayer, {Track} from 'react-native-track-player';

export interface AudioPlayableItem extends Track {
  title: string;
  artwork: string;
  artist: string;
  duration: number;
}

class AudioPlayer {
  private static instance: AudioPlayer;

  static getInstance() {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
      AudioPlayer.instance.init();
    }
    return AudioPlayer.instance;
  }

  private init() {
    // set up the player so we can use it
    TrackPlayer.setupPlayer();

    // add support for capabilities
    const capabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SEEK_TO,
      TrackPlayer.CAPABILITY_SKIP,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ];

    // list of options for the player
    const options = {
      stopWithApp: true,
      // An array of media controls capabilities
      capabilities,
      // An array of capabilities that will show up when the notification is in the compact form
      compactCapabilities: capabilities,
    };

    // update the options
    TrackPlayer.updateOptions(options);
  }

  private createTrack = (item: AudioPlayableItem): Track => {
    const {url, title, id, artwork, artist} = item;
    const track = {
      id,
      url,
      title,
      artist,
      artwork,
      // here we use the voice algorithm, as it improves the quality of speech audio
      pitchAlgorithm: TrackPlayer.PITCH_ALGORITHM_VOICE,
    };
    return track;
  };

  static addTrackChangeListener = (callback: (data: any) => void) => {
    TrackPlayer.addEventListener('playback-track-changed', callback);
  };

  clear = () => {
    TrackPlayer.reset();
  };

  play = async () => {
    await TrackPlayer.play();
  };
  
  pause = async () => {
    await TrackPlayer.pause();
  };

  isPlaying = async () => {
    const currentState = await TrackPlayer.getState();
    return currentState === TrackPlayer.STATE_PLAYING;
  };

  togglePlay = async () => {
    const isPlaying = await this.isPlaying();
    if (isPlaying) {
      return TrackPlayer.pause();
    } else {
      return TrackPlayer.play();
    }
  };

  seekTo = async (position: number) => {
    await TrackPlayer.seekTo(position);
  };

  next = async () => {
    await TrackPlayer.skipToNext();
  };

  previous = async () => {
    await TrackPlayer.skipToPrevious();
  };

  getCurrentTrackId = async () => {
    let trackId = await TrackPlayer.getCurrentTrack();
    return trackId;
  };

  getDuration = async () => {
    let duration = await TrackPlayer.getDuration();
    return duration;
  };

  prependToQueue = async (
    playables: AudioPlayableItem[] | AudioPlayableItem,
  ) => {
    const audioFiles = Array.isArray(playables)
      ? playables.map(item => this.createTrack(item))
      : this.createTrack(playables);

    const currentTrackId = await TrackPlayer.getCurrentTrack();
    TrackPlayer.add(audioFiles, currentTrackId);
  };

  appendToQueue = (playables: AudioPlayableItem[] | AudioPlayableItem) => {
    const audioFiles = Array.isArray(playables)
      ? playables.map(item => this.createTrack(item))
      : this.createTrack(playables);
    TrackPlayer.add(audioFiles);
  };
}

const eventHandler = async (data: any) => {
  let position;
  switch (data.type) {
    case 'remote-seek':
      position = await TrackPlayer.getPosition();
      break;
  }
};

export function registerAudioPlayerEventHandler() {
  TrackPlayer.registerEventHandler(eventHandler);
}

export default AudioPlayer;
