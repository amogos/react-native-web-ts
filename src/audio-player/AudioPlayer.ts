import TrackPlayer, {Track} from 'react-native-track-player';

export interface PlayableItem extends Track {
  title: string;
  artwork: string;
  artist: string;
}

class AudioPlayer {
  private static instance: AudioPlayer;

  static getInstance() {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
      AudioPlayer.instance.init();
      return AudioPlayer.instance;
    }
  }

  private init() {
    // set up the player so we can use it
    TrackPlayer.setupPlayer({
      iosCategoryMode: 'spokenAudio',
    });

    // add support for capabilities
    const capabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SEEK_TO,
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

  private createTrack = (item: PlayableItem): Track => {
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

  static addTrackChangeListener = (callback: () => void) => {
    TrackPlayer.addEventListener('playback-track-changed', callback);
  };

  clear = () => {
    TrackPlayer.reset();
  };

  pause = () => {
    TrackPlayer.pause();
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

  next = () => {
    TrackPlayer.skipToNext();
  };

  previous = () => {
    TrackPlayer.skipToPrevious();
  };


  getCurrentTrackId = async () => {
    let trackId =  await TrackPlayer.getCurrentTrack();
    return trackId;
  }

  prependToQueue = async (playables: PlayableItem[] | PlayableItem) => {
    const audioFiles = Array.isArray(playables)
      ? playables.map(item => this.createTrack(item))
      : this.createTrack(playables);

    const currentTrackId = await TrackPlayer.getCurrentTrack();
    TrackPlayer.add(audioFiles, currentTrackId);
  };

  appendToQueue = (playables: PlayableItem[] | PlayableItem) => {
    const audioFiles = Array.isArray(playables)
      ? playables.map(item => this.createTrack(item))
      : this.createTrack(playables);
    TrackPlayer.add(audioFiles);
  };
}

export default AudioPlayer;
